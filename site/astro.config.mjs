// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: auf die echte Domain umstellen, sobald sie feststeht (dann `base` entfernen)
  site: 'https://khaledamr43.github.io',
  base: '/marli-aenderungsschneiderei/',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
