<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';

	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { scale } from 'svelte/transition';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	const labels = {
		nl: '🇳🇱',
		en: '🇬🇧'
	} as Record<AvailableLanguageTag, string>;

	const currentLanguage = languageTag();
	const newLanguage = currentLanguage === 'nl' ? 'en' : 'nl';
</script>

<div class="language-switcher">
	<button
		class="language-button"
		on:click={() => switchToLanguage(newLanguage)}
		title="Switch language to {newLanguage.toUpperCase()}"
	>
		<span
			transition:scale={{ duration: 250 }}
			class={`language-flag ${currentLanguage === 'nl' ? 'selected' : ''}`}>{labels.nl}</span
		>
		<span
			transition:scale={{ duration: 250 }}
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
