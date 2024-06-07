<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';

	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

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
	const buttonLabel = labels[newLanguage];
</script>

<div class="language-switcher">
	<button
		class="language-button"
		on:click={() => switchToLanguage(newLanguage)}
		title="Switch language to {newLanguage.toUpperCase()}"
	>
		{buttonLabel}
	</button>
</div>

<style>
	.language-switcher {
		display: flex;
		align-items: center;
	}

	.language-button {
		font-size: 2rem;
		background: none;
		border: none;
		cursor: pointer;
	}
</style>
