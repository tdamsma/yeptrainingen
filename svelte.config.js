import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path'
import rehypeRewrite from 'rehype-rewrite';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [
		[rehypeRewrite, {
			rewrite: (node) => {
				// replace img tags with enhanced:img
				if (node.type == 'element' && node.tagName == 'img') {
					node.tagName = 'enhanced:img';
					// add a css class "post-img" for styling purposes
					node.properties['class'] = `post-img ${node.properties['class'] ?? ''}`.trimEnd();
				}
			}
		}],
	]
}



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexOptions),
		vitePreprocess(),
		sveltePreprocess({ scss: true, pug: true }),
	],

	onwarn: (warning, handler) => {
		if (
			warning.code === 'css-unused-selector' ||
			warning.code === 'vite-plugin-svelte-preprocess-many-dependencies' ||
			warning.code === 'a11y-no-redundant-roles'
		) {
			return;
		}
		handler(warning);
	},
	extensions: ['.svelte', '.md'],
	kit: {
		// adapter-static is suitable for static site generation
		adapter: adapter({
			// default options are suitable for most applications
		}),
		alias: {
			$content: path.resolve('content'),
		},
	},
};

export default config;

