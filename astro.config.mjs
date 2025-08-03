// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Since you're using static site generation
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },
 experimental: {
    responsiveImages: true,      // optional in v5.4
    clientPrerender: true,       // if you use `prefetch: true`
    contentIntellisense: true,   // if using `.mdx/.mdoc` content collections
    session : true,          // if you use `session` in your components
  },

  integrations: [react(), icon()],

  adapter: cloudflare()
});