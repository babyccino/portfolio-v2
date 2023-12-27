import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import glsl from "vite-plugin-glsl";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  prefetch: true,
  vite: {
    plugins: [glsl()]
  }
});