// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Changed to server output mode
  adapter: cloudflare({
    mode: 'directory',
    runtime: {
      mode: 'local',
      type: 'pages'
    }
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ['react-dom/server', 'react-dom/server.browser']
      }
    }
  },
  integrations: [
    react({
      include: ['**/react/*'],
      ssr: true
    }), 
    icon()
  ]
});