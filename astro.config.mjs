// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://SaraAndrade1123.github.io/',
  base: '/ManualTecnico/',
  vite: {
    plugins: [tailwindcss()]
  }
});