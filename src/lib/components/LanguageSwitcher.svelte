<script lang="ts">
	import { locales, getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/stores';

	type Locale = (typeof locales)[number];

	const labels = {
		nl: '🇳🇱',
		en: '🇬🇧'
	} as Record<Locale, string>;

	let currentLanguage = $derived(
		(() => {
			// Access $page.url to make this reactive to route changes
			const _ = $page.url.pathname;
			return getLocale();
		})()
	);
	let newLanguage = $derived(currentLanguage === 'nl' ? 'en' : 'nl');
	let switchUrl = $derived(localizeHref($page.url.pathname, { locale: newLanguage }));
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
