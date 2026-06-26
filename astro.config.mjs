// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Production origin for canonical URLs, Open Graph, and sitemaps.
 * Netlify: https://abdulmalik-yakhni.netlify.app
 * Override at build time: SITE_URL=https://yourdomain.com npm run build
 */
const site = process.env.SITE_URL ?? 'https://abdulmalik-yakhni.netlify.app';

// https://astro.build/config
export default defineConfig({
	site,
	// base: '/Portfolio/',
});
