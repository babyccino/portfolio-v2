uniform sampler2D blueNoise;
uniform sampler2D tDiffuse;
uniform float aspect;
varying vec2 vUv;
uniform float dark;
uniform float time;
uniform float width;
uniform float height;

float getBlueNoiseDither(float grayscale, vec2 pixelCoords) {
  float blueNoiseValue = texture2D(blueNoise, pixelCoords).g;
  return blueNoiseValue * grayscale;
}

// doing this properly (i.e. with mipmaps) would be v expensive
const float sampleCountRoot = 3.;
const float modulusY = 0.075;
float averageTex(vec2 uv) {
  float modulusX = 0.075 * aspect;
  vec2 origin = uv - vec2(mod(uv.x, modulusX), mod(uv.y, modulusY));
  
  float sum = 0.0;
  for (float i = 0.0; i < sampleCountRoot*sampleCountRoot; ++i) {
    float x = mod(i, sampleCountRoot);
    float y = i / sampleCountRoot;
    vec2 blockUv = origin + vec2(modulusX, modulusY)*vec2(x, y)*(1./sampleCountRoot);
    sum += texture2D(tDiffuse, blockUv).x;
  }
  return sum/(sampleCountRoot*sampleCountRoot);
}

const vec3 initalDark = vec3(3., 7., 18.)/255.;
const vec3 targetDark = vec3(75., 85., 99.)/255.;
const vec3 diffDark = targetDark - initalDark;

const vec3 initalLight = vec3(249., 250., 251.)/255.;
const vec3 targetLight = vec3(88., 74., 70.)/255.;
const vec3 diffLight = targetLight - initalLight;

void main() {
  float modded = averageTex(vUv);
  float val = texture2D( tDiffuse, vUv ).x;
  float mixed = mix(val, modded, 0.5);
  float x = mod(vUv.x*width, 1024.);
  float y = mod(vUv.y*height, 1024.);
  vec2 pixelCoords = mod(vec2(x,y)/1024., 1.0);
  float final = getBlueNoiseDither(mixed, pixelCoords);

  vec3 darkVec = initalDark + diffDark*final;
  vec3 light = initalLight + diffLight*final;

  gl_FragColor = dark*vec4(darkVec, 1) + (1.-dark)*vec4(light, 1);
}