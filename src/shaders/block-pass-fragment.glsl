uniform sampler2D blueNoise;
uniform sampler2D tDiffuse;
uniform float aspect;
varying vec2 vUv;
uniform float dark;
uniform float time;

float getBlueNoiseDither(float grayscale, vec2 pixelCoords) {
  float blueNoiseValue = length(texture2D(blueNoise, pixelCoords).rgb);
  return blueNoiseValue * grayscale;
  // return blueNoiseValue < grayscale ? grayscale : 0.0;
  // return step( blueNoiseValue, grayscale );
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

const float timeInv = 1./0.00005;

void main() {
  float modded = averageTex(vUv);
  float val = texture2D( tDiffuse, vUv ).x;
  float mixed = mix(val, modded, 0.5);
  vec2 pixelCoords = mod(vUv*3.*vec2(1., aspect), 1.0);
  float final = getBlueNoiseDither(mixed, pixelCoords);

  float rDark = (3.+(255.)*final*0.25)/255.;
  float gDark = (7.+(255.)*final*0.25)/255.;
  float bDark = (18.+(1.3*255.)*final*0.25)/255.;
  float rLight = (249.-249.*final*0.4)/255.;
  float gLight = (250.-250.*final*0.4)/255.;
  float bLight = (251.-251.*final*0.4)/255.;

  gl_FragColor = dark*vec4(rDark, gDark, bDark, 1) + (1.-dark)*vec4(rLight, gLight, bLight, 1);
}