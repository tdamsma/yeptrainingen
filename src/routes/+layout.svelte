<script>
	// self-hosted so text does not wait on a CSS chain to fonts.googleapis.com
	import '@fontsource/roboto/latin-300.css';
	import '@fontsource/roboto/latin-400.css';
	import '@fontsource/roboto/latin-500.css';
	import '@fontsource/roboto/latin-700.css';
	import '@fontsource/dosis/latin-400.css';
	import '#lib/styles/vendored-bootstrap.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
</script>

<div>
	<Header />
	<slot />
	<Footer />
</div>

<style>
	/* Markdown images carry their intrinsic width; keep them inside the text column */
	/* container query units below resolve against the text column width */
	:global(picture:has(> img.post-img)) {
		display: block;
		container-type: inline-size;
	}
	:global(img.post-img) {
		display: block;
		margin-inline: auto;
		max-width: 100%;
		height: auto;
		/* portrait images stay no taller than the column is wide */
		max-height: 100cqi;
		object-fit: contain;
	}
</style>
