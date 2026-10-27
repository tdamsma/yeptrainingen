<script lang="ts">
	import { locales, getLocale, localizeHref, deLocalizeHref } from '#lib/paraglide/runtime.js';
	import { page } from '$app/state';

	type Locale = (typeof locales)[number];

	const labels = {
		nl: '🇳🇱',
		en: '🇬🇧'
	} as Record<Locale, string>;

	let currentLanguage = $derived(
		(() => {
			// Access page.url to make this reactive to route changes
			const _ = page.url.pathname;
			return getLocale();
		})()
	);
	let newLanguage = $derived<Locale>(currentLanguage === 'nl' ? 'en' : 'nl');
	// keys only; the loaders stay lazy so no content is bundled here
	const contentFiles = new Set(
		Object.keys(import.meta.glob('/content/{blog,coaching,trainingen}/*.md'))
	);

	// untranslated posts link to the overview, so neither visitors nor the prerender crawler reach a not-found page
	function translatedPath(pathname: string, locale: Locale) {
		const path = deLocalizeHref(pathname);
		const match = path.match(/^\/(blog|coaching|trainingen)\/([^/]+)$/);
		if (match && !contentFiles.has(`/content/${match[1]}/${match[2]}.${locale}.md`)) {
			return `/${match[1]}`;
		}
		return path;
	}

	let switchUrl = $derived(
		localizeHref(translatedPath(page.url.pathname, newLanguage), { locale: newLanguage })
	);
</script>

<a
	data-sveltekit-reload
	href={switchUrl}
	class="language-toggle"
	role="button"
	title="Switch language to {newLanguage.toUpperCase()}"
>
	<span class="toggle-track">
		<span class="toggle-option {currentLanguage === 'nl' ? 'active' : ''}">{labels.nl}</span>
		<span class="toggle-option {currentLanguage === 'en' ? 'active' : ''}">{labels.en}</span>
		<span class="toggle-slider {currentLanguage === 'en' ? 'right' : ''}"></span>
	</span>
</a>

<style>
	.language-toggle {
		text-decoration: none;
		cursor: pointer;
	}

	.toggle-track {
		display: flex;
		align-items: center;
		background: #e0e0e0;
		border-radius: 20px;
		padding: 2px;
		position: relative;
		width: 70px;
		height: 32px;
	}

	.toggle-option {
		flex: 1;
		text-align: center;
		font-size: 1rem;
		z-index: 1;
		transition: opacity 0.2s ease;
	}

	.toggle-option.active {
		opacity: 1;
	}

	.toggle-option:not(.active) {
		opacity: 0.5;
	}

	.toggle-slider {
		position: absolute;
		top: 2px;
		left: 2px;
		width: calc(50% - 2px);
		height: calc(100% - 4px);
		background: white;
		border-radius: 18px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		transition: transform 0.2s ease;
	}

	.toggle-slider.right {
		transform: translateX(100%);
	}
</style>
