import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()
	],
	server: {
		fs: {
			allow: [
				'content/blog',
				'content/coaching',
				'content/opdrachtgevers',
				'content/team',
				'content/trainingen'
			]
		}
	}
});