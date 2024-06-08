import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),
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
