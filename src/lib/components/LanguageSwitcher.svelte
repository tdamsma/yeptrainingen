<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';

	import { i18n } from '$lib/i18n';
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	async function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		await goto(localisedPath);
		await invalidateAll();
	}

	const labels = {
		nl: '🇳🇱',
		en: '🇬🇧'
	} as Record<AvailableLanguageTag, string>;

	let currentLanguage = $derived((() => {
		// Access $page.url to make this reactive to route changes
		const _ = $page.url.pathname;
		return languageTag();
	})());
	let newLanguage = $derived(currentLanguage === 'nl' ? 'en' : 'nl');
</script>

<div class="language-switcher">
	<button
		class="language-button"
		onclick={() => switchToLanguage(newLanguage)}
		title="Switch language to {newLanguage.toUpperCase()}"
	>
		<span
			class={`language-flag ${currentLanguage === 'nl' ? 'selected' : ''}`}>{labels.nl}</span
		>
		<span
			class={`language-flag ${currentLanguage === 'en' ? 'selected' : ''}`}>{labels.en}</span
		>
	</button>
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
