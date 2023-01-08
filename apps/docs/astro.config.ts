import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Solid for Right Side Bar
		solid(),
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	site: `https://docs.astro-reactive.dev`,
});
