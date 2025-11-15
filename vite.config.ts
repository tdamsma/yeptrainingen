import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/onze-aanpak',
					localized: [
						['en', '/en/our-approach'],
						['nl', '/onze-aanpak']
					]
				},
				{
					pattern: '/:path(.*)?',
					localized: [
						['en', '/en/:path(.*)?'],
						['nl', '/:path(.*)?']
					]
				}
			]
		}),
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
