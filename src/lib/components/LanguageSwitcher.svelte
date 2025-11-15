<script lang="ts">
	import { locales, getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/stores';

	type Locale = typeof locales[number];

	const labels = {
		nl: '🇳🇱',
		en: '🇬🇧'
	} as Record<Locale, string>;

	let currentLanguage = $derived((() => {
		// Access $page.url to make this reactive to route changes
		const _ = $page.url.pathname;
		return getLocale();
	})());
	let newLanguage = $derived(currentLanguage === 'nl' ? 'en' : 'nl');
	let switchUrl = $derived(localizeHref($page.url.pathname, { locale: newLanguage }));
</script>

<div class="language-switcher">
	<a
		data-sveltekit-reload
		href={switchUrl}
		class="language-button"
		title="Switch language to {newLanguage.toUpperCase()}"
	>
		<span
			class={`language-flag ${currentLanguage === 'nl' ? 'selected' : ''}`}>{labels.nl}</span
		>
		<span
			class={`language-flag ${currentLanguage === 'en' ? 'selected' : ''}`}>{labels.en}</span
		>
	</a>
</div>

<style>
	.language-switcher {
		display: flex;
		align-items: center;
	}

	.language-button {
		font-size: 1.2rem;
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.language-flag {
		padding: 0.2rem 0.5rem;
		transition: color 0.3s ease;
	}

	.language-flag.selected {
		transform: scale(1.4);
		color: #007bff; /* Bootstrap primary color */
	}

	.separator {
		margin: 0 0.5rem;
	}
</style>
