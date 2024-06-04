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
</script>

<div class="language-switcher">
	<label class="label" for="language-select">Language:</label>
	<select
		id="language-select"
		class="custom-select larger"
		on:change={(e) => switchToLanguage(/** @type {any} */ (e).target.value)}
	>
		{#each availableLanguageTags as langTag}
			<option value={langTag} selected={languageTag() === langTag}>{labels[langTag]}</option>
		{/each}
	</select>
</div>

<style>
	.language-switcher {
		display: flex;
		align-items: center;
	}

	.language-switcher label {
		margin-right: 8px;
		color: rgba(0, 0, 0, 0.5);
		margin-top: 5px;
	}
	.larger {
		font-size: 2rem;
	}
</style>
