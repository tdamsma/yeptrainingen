<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';

	export let data;

	interface ImageModule {
		default: string;
	}

	const imageModules = import.meta.glob(
		'$content/trainingen/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
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
								class="img-fluid post-title-img"
								sizes="min(1280px, 100vw)"
								src={imageModules[`/content/trainingen/${data.img}`].default}
								alt={data.alt}
							/>
						{/if}
					</div>
					<h2>{data.title}</h2>
					<div class="training-details-body">
						<data.content />
					</div>
					<div class="text-center pt-2">
						<button
							class="m-1 btn btn-primary"
							title="Stuur een email"
							onclick={() =>
								(window.location.href = `mailto:marijn@yeptrainingen.nl?subject=Informatieverzoek training: ${data.title}`)}
						>
							{m.trainingen_informeer()}
						</button>
						{#if data.springest}
							<button
								class="m-1 btn btn-primary"
								title="Via Springest"
								onclick={() => window.open(`${data.springest}#ervaringen`)}
							>
								{m.trainingen_ervaringen()}
							</button>
						{/if}
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-5 sidebar">
				{#each data.surroundingDocuments as surroundingdata}
					<div class="card mt-5 overflow-hidden bg-dark text-white">
						<enhanced:img
							class="card-img-top rounded-0"
							sizes="min(1280px, 100vw)"
							src={imageModules[`/content/trainingen/${surroundingdata.meta.img}`].default}
							alt={surroundingdata.meta.alt}
						/>
						<div class="card-body p-3">
							<h5 class="smalltext card-title">{surroundingdata.meta.title}</h5>
						</div>
						<a
							class="stretched-link font-bold"
							href={localizeHref(`/trainingen/${surroundingdata.path}`)}
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
