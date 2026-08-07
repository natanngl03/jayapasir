// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
   site: "https://jayapasir.com/",
   integrations: [icon(), react(), sitemap()],
   build: {
      assets: 'assets',
   },
   outDir: 'docs',
});
