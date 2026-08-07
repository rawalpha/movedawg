import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://movedawg.com',
  integrations: [tailwind({ applyBaseStyles: false })],
});