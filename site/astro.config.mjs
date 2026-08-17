// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://marli-kolbermoor.de', // TODO: echte Domain beim Deploy eintragen
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
