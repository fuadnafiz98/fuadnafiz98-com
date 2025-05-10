// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fuadnafiz98.com',
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  experimental: {
    clientPrerender: true,
  },

  integrations: [sitemap()],
});
