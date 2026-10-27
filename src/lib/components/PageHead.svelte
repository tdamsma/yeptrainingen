<script lang="ts">
	let { title, description = '' }: { title?: string; description?: string } = $props();

	const clean = (text: string) =>
		text
			.replace(/<[^>]*>/g, '')
			.replace(/\s+/g, ' ')
			.trim();

	// search engines show about 155 characters, so cut at a word boundary
	function truncate(text: string, max = 155) {
		if (text.length <= max) return text;
		return text.slice(0, text.lastIndexOf(' ', max - 1)).replace(/[\s,.;:]+$/, '') + '…';
	}
</script>

<svelte:head>
	<title>{title ? `${clean(title)} | YEP Trainingen` : 'YEP Trainingen'}</title>
	{#if description}
		<meta name="description" content={truncate(clean(description))} />
	{/if}
</svelte:head>
