import { defineConfig } from 'astro/config';

export default defineConfig({
    integrations: [seo()],
    site: 'https://gracexuwt.github.io',
    base: '/portfolio',
});
