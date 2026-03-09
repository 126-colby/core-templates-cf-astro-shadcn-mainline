// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

const site = process.env.SITE ?? "http://localhost:4321";
const base = process.env.BASE || "/";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [mdx(), sitemap(), react()],
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
