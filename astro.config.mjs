import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import glsl from "vite-plugin-glsl"
import icon from "astro-icon"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://www.gusryan.me",
  integrations: [tailwind(), icon(), sitemap()],
  prefetch: true,
  vite: {
    plugins: [glsl()],
  },
})
