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
import { getDarkMode, darkModeEvent } from "./dark"

export default class BlockWave {
  material: THREE.ShaderMaterial
  scene: THREE.Scene
  camera: THREE.OrthographicCamera
  renderer: THREE.WebGLRenderer
  geometry: THREE.PlaneGeometry
  blockNoisePass: ShaderPass
  effectComposer: EffectComposer
  darkValue: number = 1.0
  darkMode: boolean = true
  time: number = Math.random() * 100

  constructor(canvas: HTMLCanvasElement) {
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 50)
    this.camera.position.z = 4
    this.camera.position.y = -1
    this.camera.rotateX(0.7)

    this.geometry = new THREE.PlaneGeometry(10, 10, 200, 200)
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: this.time },
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

    this.setDarkMode()
    this.darkValue = this.darkMode ? 1.0 : 0.0
    const blockNoiseShader = {
      ...CopyShader,
      uniforms: {
        ...CopyShader.uniforms,
        aspect: { value: window.innerHeight / window.innerWidth },
        blueNoise: { value: loader.load("/textures/blue-noise.webp") },
        dark: { value: this.darkValue },
        time: { value: this.time },
      },
      fragmentShader: BlockPass,
    }
    this.blockNoisePass = new ShaderPass(blockNoiseShader)
    this.effectComposer.addPass(this.blockNoisePass)

    window.addEventListener("resize", this.onResize.bind(this))
    window.addEventListener(darkModeEvent.type, this.setDarkMode.bind(this))
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
    this.time = time
    this.material.uniforms.time.value = time
    this.blockNoisePass.uniforms.time.value = time
  }
  animate() {
    if (this.darkMode && this.darkValue < 1.0) {
      this.darkValue += 0.015
      this.blockNoisePass.uniforms.dark.value = this.darkValue
    } else if (!this.darkMode && this.darkValue > 0.0) {
      this.darkValue -= 0.015
      this.blockNoisePass.uniforms.dark.value = this.darkValue
    }
    this.updateTime(this.time + 0.00005)
    this.effectComposer.render()
    requestAnimationFrame(this.animate.bind(this))
  }
  setDarkMode() {
    this.darkMode = getDarkMode()
  }
}
