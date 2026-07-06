// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// Static output — deploys to Vercel with zero config.
// If SSR is ever needed, add the @astrojs/vercel adapter.
export default defineConfig({
  site: 'https://gochrz.com',
  devToolbar: { enabled: false },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
