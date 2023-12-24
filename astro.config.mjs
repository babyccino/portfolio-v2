import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import glsl from "vite-plugin-glsl"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  prefetch: true,
  vite: {
    plugins: [glsl()],
  },
})
