// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    // Remove the rollupOptions that were causing module resolution issues
  },
  integrations: [
    react({
      include: ['**/react/*'],
    }), 
    icon()
  ]
});