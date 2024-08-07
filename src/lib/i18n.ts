// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
	pathnames: {
		'/team': {
			nl: '/team',
			en: '/team'
		},
		'/blog': {
			nl: '/blog',
			en: '/blog'
		},
		'/onze-aanpak': {
			nl: '/onze-aanpak',
			en: '/our-approach'
		}
	},
	prefixDefaultLanguage: 'never',
	exclude: ['/CRKBO_erkenning.jpg', '/favicon.png', /^\/images\/.*/, /^\/_nuxt\/.*/, /\.pdf$/]
});
