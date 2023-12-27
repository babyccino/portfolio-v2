import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { CopyShader } from "three/examples/jsm/shaders/CopyShader.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
// @ts-ignore
import vertexShader from "../shaders/vertex-noise.glsl"
// @ts-ignore
import fragmentShader from "../shaders/fragment.glsl"
// @ts-ignore
import BlockPass from "../shaders/block-pass-fragment.glsl"

export default class BlockWave {
  material: THREE.ShaderMaterial
  scene: THREE.Scene
  camera: THREE.OrthographicCamera
  renderer: THREE.WebGLRenderer
  geometry: THREE.PlaneGeometry
  blockNoisePass: ShaderPass
  effectComposer: EffectComposer
  time: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 50)
    this.camera.position.z = 4
    this.camera.position.y = -1
    this.camera.rotateX(0.7)

    this.geometry = new THREE.PlaneGeometry(10, 10, 200, 200)
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: Math.random() * 10 },
        dark: { value: 1.0 },
        aspect: { value: window.innerHeight / window.innerWidth },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })
    const plane = new THREE.Mesh(this.geometry, this.material)

    this.scene = new THREE.Scene()
    this.scene.add(plane)

    this.renderer = new THREE.WebGLRenderer({ canvas })
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.effectComposer = new EffectComposer(this.renderer)
    this.effectComposer.setSize(window.innerWidth, window.innerHeight)

    const renderScene = new RenderPass(this.scene, this.camera)
    this.effectComposer.addPass(renderScene)

    const loader = new THREE.TextureLoader()
    const blockNoiseShader = {
      ...CopyShader,
      uniforms: {
        ...CopyShader.uniforms,
        aspect: { value: window.innerHeight / window.innerWidth },
        blueNoise: { value: loader.load("/textures/blue-noise.webp") },
        dark: { value: 1.0 },
        time: { value: Math.random() * 10 },
      },
      fragmentShader: BlockPass,
    }
    this.blockNoisePass = new ShaderPass(blockNoiseShader)
    this.effectComposer.addPass(this.blockNoisePass)

    window.addEventListener("resize", this.onResize.bind(this))
  }
  addBloom() {
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth * 2, window.innerHeight * 2),
      0.01,
      0.01,
      0.0,
    )
    this.effectComposer.addPass(bloomPass)
  }
  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.material.uniforms.aspect.value = window.innerHeight / window.innerWidth
    this.effectComposer.setSize(window.innerWidth, window.innerHeight)
    this.blockNoisePass.uniforms.aspect.value = window.innerHeight / window.innerWidth
  }
  updateTime(time: number) {
    this.material.uniforms.time.value = time
    this.blockNoisePass.uniforms.time.value = time
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this))

    this.updateTime(this.time + 0.00005)
    this.effectComposer.render()
  }
  switchDarkMode() {
    // TODO: ここでdarkモードの切り替えをする
  }
}
