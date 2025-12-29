<script lang="ts">
	import type { BlogModule, ImageModule, Blog } from '$lib/types';
	import Opdrachtgevers from '$lib/components/Opdrachtgevers.svelte';
	import SpringestReviews from '$lib/components/SpringestReviews.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime.js';
	import { page } from '$app/stores';
	const imageModules = import.meta.glob(
		'$content/blog/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;
	const blogModulesNl = import.meta.glob(`$content/blog/*.nl.md`, {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, BlogModule>;
	const blogModulesEn = import.meta.glob(`$content/blog/*.en.md`, {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, BlogModule>;

	const blogModulesMap = {
		en: blogModulesEn,
		nl: blogModulesNl
	};

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en', options);
	}

	// Make this reactive to the current language - use $page to trigger updates on route change
	let blogs = $derived(
		(() => {
			// Access $page.url to make this reactive to route changes
			const _ = $page.url.pathname;
			const blogModules = blogModulesMap[getLocale()];
			return Object.entries(blogModules)
				.filter(([path]) => !path.includes('_._')) // Filter out fallback 404 files
				.map(([path, module]) => ({
					path: path.replace(/\.(nl|en)\.md$/, ''),
					name:
						path
							.replace(/\.(nl|en)\.md$/, '')
							.split('/')
							.pop() || '',
					meta: module.metadata,
					content: module.default
				}))
				.filter((blog) => blog.meta?.date) // Filter out any posts without a date
				.sort((a, b) => {
					const dateA = a.meta?.date ? new Date(a.meta.date).getTime() : 0;
					const dateB = b.meta?.date ? new Date(b.meta.date).getTime() : 0;
					return dateB - dateA;
				});
		})()
	);

	let blog = $derived(blogs[0]);
</script>

<div class="container-fluid container-left">
	<div class="row p-0">
		<div class="col-md-6 p-0" style="height: 300px; overflow: hidden">
			<enhanced:img
				class="img-fluid"
				sizes="min(1280px, 100vw)"
				src="/static/images/training-yep.jpg"
				style="position: absolute; top: -100%; left: 0; right: 0; bottom: -100%; margin: auto;"
				alt="Training session at YEP"
			/>
		</div>
		<div class="col-md-6 pt-4" style="padding-left:40px">
			<br />
			<h2>
				{m.home_inzicht_durf_vaardigheid()}
				<br />
				<span class="yep-geel-donker">{m.home_voor_maatschappelijke_impact()}</span>
				<br />
				<br />
			</h2>
		</div>
	</div>
</div>

<div class="jumbotron jumbotron-fluid yep-geel">
	<div class="container">
		<p>{m.home_extra_tekst()}</p>
		<h2 style="text-align: center;">{m.home_leer_drang()}</h2>
	</div>
</div>

<div class="jumbotron jumbotron-fluid">
	<div class="container">
		<p>{m.home_wij_zijn_er_voor_professionals()}</p>
		<p>{m.home_wij_zijn_er_voor_professionals2()}</p>
	</div>
</div>

<div class="jumbotron jumbotron-fluid yep-grijs-donker">
	<div class="container">
		<div class="row justify-content-around">
			<div class="col-md-3 border bg-light p-2 text-center">
				<h2>{m.home_uitgelicht()}</h2>
				<a href={localizeHref('/trainingen/talent-ontwikkelprogramma')} class="d-block mt-2">
					<div class="square-img-container text-left">
						<enhanced:img
							class="square-img thumbnail"
							sizes="min(1280px, 100vw)"
							src="/static/images/uitgelicht1.png"
							alt="Uitgelicht met burealamp"
						/>
					</div>
					{m.home_talent_ontwikkel_programma()} >>
				</a>
			</div>
			<div class="col-md-5 border bg-light p-2 text-center">
				<h2>{m.home_reviews()}</h2>
				<SpringestReviews />
			</div>
			<div class="col-md-3 border bg-light p-2 text-center">
				<h2>{m.home_laatste_blog()}</h2>
				{#if blog}
					<a href={localizeHref(`/blog/${blog.name}`)}>
						<div class="square-img-container text-left">
							<enhanced:img
								class="square-img thumbnail"
								sizes="min(1280px, 100vw)"
								src={imageModules[`/content/blog/${blog.meta.img}`].default}
								alt={blog.meta.alt}
							/>
						</div>
						{blog.meta.title} >>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<div class="container-fluid container-right m-0">
	<div class="row">
		<div class="col-md full-width">
			<br />
			<br />
			<h1 class="yep-geel-donker">{m.home_training_coaching_advies()}</h1>
			<h1>{m.home_neem_je_talent_serieus()}</h1>
			<br />
		</div>
		<div class="col-md p-0">
			<div class="float-right" style="max-width: 500px; width: 100%">
				<enhanced:img
					class="img-fluid"
					sizes="min(1280px, 100vw)"
					src="/static/images/Trainers_van_YEP-1.png"
					alt="Trainers van YEP"
				/>
			</div>
		</div>
	</div>
</div>

<div class="jumbotron jumbotron-fluid yep-grijs-donker">
	<Opdrachtgevers />
</div>

<div class="container-fluid p-0">
	<enhanced:img
		class="img-fluid"
		sizes="min(1280px, 100vw)"
		src="/static/images/site-foto-1-of-1-3.jpg"
		alt="YEP trainers facilitating group discussion"
	/>
</div>

<div class="jumbotron jumbotron-fluid yep-grijs-donker">
	<div class="container text-light border-top border-bottom">
		<h1 class="text-center my-4">{m.home_yep_trainings_bureau()}</h1>
		<div class="row justify-content-around my-5">
			<div class="col-md-3 text-center">
				<enhanced:img
					class="img-fluid"
					sizes="min(1280px, 100vw)"
					src="/static/images/wereldbol.png"
					alt="Maatschappelijk"
				/>
				<br />
				<h2 class="mt-2">{m.home_maatschappelijk()}</h2>
				<p>{m.home_jouw_impact_is_ons_doel()}</p>
			</div>
			<div class="col-md-3 text-center">
				<enhanced:img
					class="img-fluid"
					sizes="min(1280px, 100vw)"
					src="/static/images/megafoon.png"
					alt="Actief"
				/>
				<br />
				<h2 class="mt-2">{m.home_actief()}</h2>
				<p>{m.home_leren_door_te_experimenteren()}</p>
			</div>
			<div class="col-md-3 text-center">
				<enhanced:img
					class="img-fluid"
					sizes="min(1280px, 100vw)"
					src="/static/images/puzzle.png"
					alt="Flexibel"
				/>
				<br />
				<h2 class="mt-2">{m.home_flexibel()}</h2>
				<p>{m.home_jouw_ontwikkel_vraag_staat_centraal()}</p>
			</div>
		</div>
	</div>
</div>

<div class="jumbotron jumbotron-fluid yep-geel">
	<div class="container text-center">
		<h1>{m.home_bekijk_ons_aanbod()}</h1>
		<div class="row justify-content-around mt-5">
			<div class="col-md-4 bg-light py-2 mb-2 text-center">
				<h2 class="mb-3">{m.home_trainingen()}</h2>
				<a href={localizeHref('/trainingen')} class="d-block mt-2">
					<enhanced:img
						class="img-fluid lazyload"
						sizes="min(1280px, 100vw)"
						src="/static/images/trainings-overzicht.png"
						alt="Trainingen"
					/>
					<p class="mt-2">{m.home_lees_meer()} >></p>
				</a>
			</div>
			<div class="col-md-4 bg-light py-2 mb-2 text-center">
				<h2 class="mb-3">{m.home_coaching()}</h2>
				<a href={localizeHref('/coaching')} class="d-block mt-2">
					<enhanced:img
						class="img-fluid lazyload"
						sizes="min(1280px, 100vw)"
						src="/static/images/omgaanmetstress.jpg"
						alt="Coaching"
					/>
					<p class="mt-2">{m.home_lees_meer()} >></p>
				</a>
			</div>
		</div>
	</div>
</div>
