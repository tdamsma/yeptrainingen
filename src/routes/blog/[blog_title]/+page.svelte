<script lang="ts">
	import PageHead from '#lib/components/PageHead.svelte';
	import { localizeHref } from '#lib/paraglide/runtime.js';

	export let data;

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('nl-NL', options);
	}

	interface ImageModule {
		default: string;
	}

	const imageModules = import.meta.glob(
		'/content/blog/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;
	// glob imports ignore the sizes attribute, so sidebar widths are set here
	const thumbModules = import.meta.glob(
		'/content/blog/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{ eager: true, query: { enhanced: true, w: '400;800' } }
	) as Record<string, ImageModule>;
</script>

<PageHead title={data.title} description={data.description} />

<div>
	<div class="container mt-3 mb-3 bg-white pt-4">
		<div class="row">
			<div class="col-lg-9 col-md-8 col-sm-12">
				<div class="container">
					<div class="text-center mb-4">
						{#if data.img}
							<enhanced:img
								class="img-fluid post-title-img"
								sizes="min(1280px, 100vw)"
								src={imageModules[`/content/blog/${data.img}`].default}
								alt={data.alt}
							/>
						{/if}
					</div>
					<h1>{data.title}</h1>
					<small class="text-muted">{formatDate(data.date)}</small>
					<div class="blog-details-body">
						<data.content />
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-5 sidebar">
				{#each data.surroundingDocuments as surroundingdata}
					<div class="card mt-5 overflow-hidden bg-dark text-white">
						<enhanced:img
							class="card-img-top rounded-0"
							sizes="(min-width: 768px) 25vw, (min-width: 576px) 42vw, 100vw"
							src={thumbModules[`/content/blog/${surroundingdata.meta.img}`].default}
							alt={surroundingdata.meta.alt}
						/>
						<div class="card-body p-3">
							<h2 class="smalltext card-title">{surroundingdata.meta.title}</h2>
						</div>
						<a
							class="stretched-link font-bold"
							href={localizeHref(`/blog/${surroundingdata.path}`)}
							aria-label="Read {surroundingdata.meta.title}"
						></a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.smalltext {
		font-size: 16px;
	}

	.card-img-top {
		height: auto;
	}
</style>
