// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Since you're using static site generation
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    session: true
  },

  integrations: [react(), icon()],

  adapter: cloudflare()
});