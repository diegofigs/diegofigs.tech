import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  output: "static",
  adapter: vercel({
    analytics: true,
  }),
});
