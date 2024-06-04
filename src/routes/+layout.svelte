<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import { onMount } from 'svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '$lib/scss/custom.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		// Load Bootstrap JS if needed
		const script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js';
		script.integrity = 'sha384-Piv4xVNRyMGpqk9QfDxY4yI4f4y75Lc5iWglI1FrQxod5ou4c5TVaF5YKR7z04K';
		script.crossOrigin = 'anonymous';
		document.body.appendChild(script);
	});
</script>

<template lang="pug">
  ParaglideJS( {i18n} )
    div
      Header
      slot
      Footer
</template>

<style lang="scss">
	@import '$lib/scss/custom.scss';

	@include media-breakpoint-down(sm) {
		.navbar-brand > img {
			height: 50px;
		}
	}

	@include media-breakpoint-between(sm, md) {
		.navbar-brand > img {
			height: 80px;
		}
	}
</style>
