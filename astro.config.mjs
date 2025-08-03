// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Since you're using static site generation
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), icon()],
  experimental: {
    responsiveImages: true
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});