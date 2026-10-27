<script lang="ts">
	import PageHead from '#lib/components/PageHead.svelte';
	import type { TrainingMeta, ImageModule, Training } from '#lib/types.js';
	import { getLocale, localizeHref } from '#lib/paraglide/runtime.js';
	import * as m from '#lib/paraglide/messages.js';
	import { page } from '$app/state';

	// glob imports ignore the sizes attribute, so thumbnail widths are set here
	const imageModules = import.meta.glob(
		'/content/trainingen/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{ eager: true, query: { enhanced: true, w: '400;800' } }
	) as Record<string, ImageModule>;
	const TrainingModulesNl = import.meta.glob('/content/trainingen/*.nl.md', {
		eager: true,
		import: 'metadata'
	}) as Record<string, TrainingMeta>;
	const TrainingModulesEn = import.meta.glob('/content/trainingen/*.en.md', {
		eager: true,
		import: 'metadata'
	}) as Record<string, TrainingMeta>;
	const TrainingModulesMap = { nl: TrainingModulesNl, en: TrainingModulesEn };

	let trainings = $derived(
		(() => {
			// Access page.url to make this reactive to route changes
			const _ = page.url.pathname;
			const TrainingModules = TrainingModulesMap[getLocale()];
			return Object.entries(TrainingModules)
				.map(([path, metadata]) => ({
					path: path.replace(/\.(nl|en)\.md$/, ''),
					name:
						path
							.replace(/\.(nl|en)\.md$/, '')
							.split('/')
							.pop() || path,
					meta: metadata
				}))
				.sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);
		})()
	);
</script>

<PageHead title={m.training_titel()} description={m.training_intro()} />

<div>
	<div class="jumbotron jumbotron-fluid yep-geel">
		<div class="row justify-content-around">
			<h1>{m.training_titel()}</h1>
		</div>
	</div>

	<div class="container mb-5 mt-4">
		<p>
			{m.training_intro()}
		</p>
		<p class="text-center">
			{m.training_tarieven_text()}
			<a class="link-groen" href={localizeHref('/tarieven')}>{m.training_tarieven_link()}</a>
		</p>
		<h2 class="text-center mb-3 mt-5">{m.training_overzicht()}</h2>
		<div class="row row-cols-1 row-cols-md-3">
			{#each trainings as training}
				<div class="col mb-4">
					<div class="card card-cascade narrower min-height-330">
						<div class="view view-cascade overlay">
							<div class="container2" style="height: 60%">
								<div class="rect-img-container">
									<enhanced:img
										class="rect-img card-img-top card-img"
										src={imageModules[`/content/trainingen/${training.meta.img}`].default}
										sizes="50vw"
										alt={training.meta.alt}
									></enhanced:img>
									<div class="mask rgba-white-slight"></div>
								</div>
							</div>
							<div class="card-body card-body-cascade" style="min-height: 105px">
								<h4 class="card-title">{training.meta.title}</h4>
								<a
									class="stretched-link font-bold"
									href={localizeHref(`/trainingen/${training.name}`)}
									aria-label="Read about {training.meta.title}"
								></a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="css">
	.card.card-cascade .view.view-cascade {
		border-radius: 0.25rem;
		-webkit-box-shadow:
			0 5px 11px 0 rgba(0, 0, 0, 0.18),
			0 4px 15px 0 rgba(0, 0, 0, 0.15);
		box-shadow:
			0 5px 11px 0 rgba(0, 0, 0, 0.18),
			0 4px 15px 0 rgba(0, 0, 0, 0.15);
	}

	.card.card-cascade.narrower {
		margin-top: 1.25rem;
	}

	.card.card-cascade.narrower .view.view-cascade {
		margin-top: -1.25rem;
		margin-right: 4%;
		margin-left: 4%;
	}

	.rect-img-container {
		position: relative;
	}

	.rect-img-container::after {
		content: '';
		display: block;
		padding-bottom: 100%;
		margin-bottom: -30%;
	}

	.rect-img {
		position: absolute;
		width: 100%;
		height: 70%;
		object-fit: cover;
	}
</style>
