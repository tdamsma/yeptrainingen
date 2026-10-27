import { paraglideVitePlugin } from '@inlang/paraglide-js';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, type MdsvexOptions } from 'mdsvex';
import rehypeRewrite from 'rehype-rewrite';
import { svelteSitemap } from 'svelte-sitemap/vite';
import { defineConfig, type Plugin } from 'vite';

const mdsvexOptions: MdsvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [
		[
			rehypeRewrite,
			{
				rewrite: (node: any) => {
					// replace img tags with enhanced:img
					if (node.type == 'element' && node.tagName == 'img') {
						node.tagName = 'enhanced:img';
						// add a css class "post-img" for styling purposes
						node.properties['class'] = `post-img ${node.properties['class'] ?? ''}`.trimEnd();
						// without sizes enhanced-img assumes a 2x source and serves a half-width 1x file
						node.properties['sizes'] = '(min-width: 1200px) 800px, 100vw';
					}

					// add aria-label to links containing only images (for accessibility)
					if (node.type == 'element' && node.tagName == 'a') {
						const hasOnlyImage =
							node.children?.length === 1 &&
							node.children[0].type === 'element' &&
							(node.children[0].tagName === 'img' || node.children[0].tagName === 'enhanced:img');

						if (hasOnlyImage && !node.properties.ariaLabel) {
							const imgAlt = node.children[0].properties?.alt || 'document';
							node.properties.ariaLabel = `Download: ${imgAlt}`;
						}
					}
				}
			}
			// rehype-rewrite's hast-typed Plugin does not match mdsvex's unified v9 Plugin type
		] as any
	]
};

// enhanced-img's markup hook has order 'pre', so it runs before Svelte preprocessing and never sees the <enhanced:img> tags mdsvex emits for Markdown images
async function enhancedImagesAfterPreprocess(): Promise<Plugin[]> {
	const plugins = await enhancedImages();
	for (const plugin of plugins) {
		if (plugin.name === 'vite-plugin-enhanced-img-markup' && typeof plugin.transform === 'object') {
			plugin.enforce = 'pre';
			delete plugin.transform.order;
		}
	}
	return plugins;
}

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
		// SvelteKit 3 no longer reads svelte.config.js, so all Svelte/Kit config lives here
		sveltekit({
			preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],
			onwarn: (warning, handler) => {
				if (
					warning.code === 'css-unused-selector' ||
					warning.code === 'vite-plugin-svelte-preprocess-many-dependencies' ||
					warning.code === 'a11y-no-redundant-roles' ||
					warning.code === 'a11y-missing-content' ||
					warning.code === 'a11y-img-redundant-alt' ||
					warning.code === 'a11y-img-missing-alt' ||
					warning.code === 'a11y-no-noninteractive-tabindex'
				) {
					return;
				}
				handler(warning);
			},
			extensions: ['.svelte', '.md'],
			adapter: adapter(),
			paths: {
				origin: 'https://www.yeptrainingen.nl'
			},
			prerender: {
				entries: ['*', '/en'],
				crawl: true
			}
		}),
		// must come after sveltekit() so it runs after its preprocess plugin
		enhancedImagesAfterPreprocess(),
		svelteSitemap({ domain: 'https://www.yeptrainingen.nl' })
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
