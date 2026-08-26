// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://marli-schneiderei.de',
  base: '/',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
