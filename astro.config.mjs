import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
