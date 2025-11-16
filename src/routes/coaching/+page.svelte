<script lang="ts">
	import type { CoachingModule, ImageModule, Coaching } from '$lib/types';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/stores';

	const imageModules = import.meta.glob(
		'$content/coaching/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;

	const coachingModulesNl = import.meta.glob('$content/coaching/*.nl.md', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, CoachingModule>;
	const coachingModulesEn = import.meta.glob('$content/coaching/*.en.md', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, CoachingModule>;

	const coachingModulesMap = {
		en: coachingModulesEn,
		nl: coachingModulesNl
	};

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en', options);
	}

	let coachings = $derived(
		(() => {
			// Access $page.url to make this reactive to route changes
			const _ = $page.url.pathname;
			const coachingModules = coachingModulesMap[getLocale()];
			return Object.entries(coachingModules)
				.map(([path, module]) => ({
					path: path.replace(/\.nl\.md$/, ''),
					name:
						path
							.replace(/\.nl\.md$/, '')
							.split('/')
							.pop() || path,
					meta: module.metadata,
					content: module.default
				}))
				.sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);
		})()
	);
</script>

<div class="container-fluid p-0 m-0">
	<div class="jumbotron jumbotron-fluid yep-geel">
		<div class="container">
			<div class="row justify-content-around">
				<h1>{m.coaching_titel()}</h1>
			</div>
		</div>
	</div>
	<div class="container mb-5 mt-4">
		<p>
			{m.coaching_intro()}
		</p>
		<p>
			{m.coaching_vraag()}
			<br />
			{m.coaching_werkwijze()}
		</p>
		<h2 class="text-center mb-3 mt-5">{m.coaching_overzicht()}</h2>
		<div class="row row-cols-1 row-cols-md-3">
			{#each coachings as coaching}
				<div class="col mb-4">
					<div class="card card-cascade narrower min-height-330">
						<div class="view view-cascade overlay">
							<div class="container2" style="height: 60%">
								<div class="rect-img-container">
									<enhanced:img
										class="rect-img card-img-top card-img"
										src={imageModules[`/content/coaching/${coaching.meta.img}`].default}
										sizes="50vw"
										alt={coaching.meta.alt}
									/>
									<div class="mask rgba-white-slight"></div>
								</div>
							</div>
							<div class="card-body card-body-cascade" style="min-height: 105px">
								<h4 class="card-title">{coaching.meta.title}</h4>
								<a
									class="stretched-link font-bold"
									href={localizeHref(`/coaching/${coaching.name}`)}
									aria-label="Read about {coaching.meta.title}"
								></a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="jumbotron bg-white m-0">
		<div class="container">
			<span class="text-center">
				<h2>{m.coaching_visie()}</h2>
				<p></p>
				{m.coaching_visie_text()}
			</span>
		</div>
		<div class="jumbotron jumbotron bg-white m-0">
			<div class="row">
				<div class="col-lg-4">
					<enhanced:img
						class="fluid"
						sizes="min(1280px, 100vw)"
						style="max-width: 100%; height: auto"
						src="/static/images/anna-stutje.jpg"
						alt="Anna Stutje, coach"
					/>
				</div>
				<div class="col-lg-8 p-4" style="max-width: 800px;">
					<p>Coachees over Anna:</p>
					<p class="rand-links-groen">
						<i
							>"Anna heeft me geholpen om structuur aan te brengen in de crisis die ik ervaarde in
							mijn werkende leven. Ze houdt je bij de les en leert je te reflecteren waardoor de
							coachingssessies doeltreffend zijn. De opdrachten die je mee naar huis krijgt leveren
							enorm veel op. Het heeft er voor gezorgd dat ik belangrijke keuzes in mijn werk heb
							kunnen maken en mijn zelfinzicht gegroeid is. Een super fijne gesprekspartner die je
							laat groeien!" – Vera</i
						>
					</p>
					<p class="rand-links-groen">
						<i
							>"The coaching with Anna has helped me immensely to listen to my own feelings whilst
							making some important life decisions. She provided me with a tool that helps me to
							reflect on my choices and behaviour. Anna knows how to create a setting that helps to
							open up easily. I would definitely recommend her as a coach." – Vincent</i
						>
					</p>
					<p class="rand-links-groen">
						<i
							>"Anna heeft me geholpen bij het formuleren van mijn 'Why'. Ik zie nu hoe belangrijk
							het is om een duidelijk beeld van mijn purpose te hebben. Dit heeft geleid tot een
							veel scherper beeld van de loopbaanstap die ik wil nemen en ik voel nu veel meer
							zelfvertrouwen om me in mijn netwerk te profileren. Ik heb daarnaast ook nog inzicht
							gekregen in verschillende kanten van mezelf die soms (ongewenst) de overhand nemen." –
							Emma</i
						>
					</p>
				</div>
			</div>
			<div class="row bg-light">
				<div class="col-lg-3 text-center p-4">
					<h4>{m.coaching_intake()}</h4>
					{m.coaching_intake_text()}
				</div>
				<div class="col-lg-3 text-center p-4">
					<h4>{m.coaching_self_examination()}</h4>
					{m.coaching_self_examination_text()}
				</div>
				<div class="col-lg-3 text-center p-4">
					<h4>{m.coaching_personal_leadership()}</h4>
					{m.coaching_personal_leadership_text()}
				</div>
				<div class="col-lg-3 text-center p-4">
					<h4>{m.coaching_consolidation()}</h4>
					{m.coaching_consolidation_text()}
				</div>
			</div>
			<enhanced:img
				class="fluid"
				sizes="min(1280px, 100vw)"
				style="max-width: 100%; height: auto"
				src="/static/images/site-foto-1-of-1-3.jpg"
				alt="Coaching services"
			/>
		</div>
	</div>
</div>

<style>
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
