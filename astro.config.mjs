import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@layouts': new URL('./src/layouts', import.meta.url).pathname,
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@modules': new URL('./src/modules', import.meta.url).pathname,
        '@pages': new URL('./src/pages', import.meta.url).pathname,
        '@lib': new URL('./src/lib', import.meta.url).pathname,
        '@styles': new URL('./src/styles', import.meta.url).pathname,
      }
    }
  }
});
