<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime.js';

	export let data;

	interface ImageModule {
		default: string;
	}

	const imageModules = import.meta.glob(
		'$content/coaching/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;
</script>

<div>
	<div class="container mt-3 mb-3 bg-white pt-4">
		<div class="row">
			<div class="col-lg-9 col-md-8 col-sm-12">
				<div class="container">
					<div class="text-center mb-4">
						{#if data.img}
							<enhanced:img
								class="img-fluid"
								sizes="min(1280px, 100vw)"
								style="object-fit: contain; max-height: 800px;"
								src={imageModules[`/content/coaching/${data.img}`].default}
								alt={data.alt}
							/>
						{/if}
					</div>
					<h2>{data.title}</h2>
					<div class="coaching-details-body">
						<data.content />
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-5 sidebar">
				{#each data.surroundingDocuments as surroundingdata}
					<div class="card mt-5 overflow-hidden bg-dark text-white">
						<enhanced:img
							class="card-img-top rounded-0"
							sizes="min(1280px, 100vw)"
							src={imageModules[`/content/coaching/${surroundingdata.meta.img}`].default}
							alt={surroundingdata.meta.alt}
						/>
						<div class="card-body p-3">
							<h5 class="smalltext card-title">{surroundingdata.meta.title}</h5>
						</div>
						<a
							class="stretched-link font-bold"
							href={localizeHref(`/coaching/${surroundingdata.path}`)}
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
