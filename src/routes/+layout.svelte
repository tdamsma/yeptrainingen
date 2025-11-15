<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import '$lib/styles/vendored-bootstrap.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<ParaglideJS {i18n}>
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</ParaglideJS>

<style>
	@media (max-width: 575.98px) {
		.navbar-brand > img {
			height: 50px;
		}
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		.navbar-brand > img {
			height: 80px;
		}
	}
</style>
