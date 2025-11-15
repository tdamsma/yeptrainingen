<script>
	import '$lib/styles/vendored-bootstrap.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div>
	<Header />
	<slot />
	<Footer />
</div>

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
