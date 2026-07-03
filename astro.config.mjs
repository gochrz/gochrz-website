// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output — deploys to Vercel with zero config.
// If SSR is ever needed, add the @astrojs/vercel adapter.
export default defineConfig({
  site: 'https://gochrz.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
