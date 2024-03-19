import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  site: "https://www.gusryan.me",
  integrations: [tailwind(), icon(), sitemap()],
  prefetch: true,
  vite: {
    plugins: [glsl()]
  }
});
