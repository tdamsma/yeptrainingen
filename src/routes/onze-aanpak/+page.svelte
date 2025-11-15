<script>
	import kenmerkenNl from './onze-aanpak.nl.json';
	import kenmerkenEn from './onze-aanpak.en.json';
	import * as m from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import { page } from '$app/stores';

	const kenmerkenMap = {
		nl: kenmerkenNl,
		en: kenmerkenEn
	};
	let data = $derived(
		(() => {
			// Access $page.url to make this reactive to route changes
			const _ = $page.url.pathname;
			return kenmerkenMap[getLocale()];
		})()
	);
</script>

<div class="container-fluid m-0 p-0 bg-white">
	<div class="jumbotron jumbotron-fluid yep-geel">
		<div class="row justify-content-around">
			<h1>{m.aanpak_title()}</h1>
		</div>
	</div>
	<div class="row overflow-hidden">
		<div class="col-lg-6 overflow-hidden">
			<enhanced:img
				style="object-fit: cover; max-height: 600px; width: 100%"
				class="fluid"
				src="/static/images/onze-aanpak-1.jpg"
				alt="A group of participants engaged in a training session, seated around a table with a facilitator presenting"
			/>
		</div>
		<div class="col-lg-6 p-3 m-0 pl-4 pr-5" style="max-width: 800px;">
			<h2>{m.aanpak_impact_title()}</h2>
			<p>
				{m.aanpak_impact_p1()}
			</p>
			<p>
				{m.aanpak_impact_p2()}
			</p>
			<p>{m.aanpak_impact_p3()}</p>

			<ul>
				<li>{m.aanpak_impact_ul1()}</li>
				<li>{m.aanpak_impact_ul2()}</li>
				<li>{m.aanpak_impact_ul3()}</li>
			</ul>
			<p>{m.aanpak_impact_p4()}</p>
			<p>
				{m.aanpak_impact_p5()}
			</p>
		</div>
	</div>
	<div class="container m-auto bg-white pt-4">
		<h2>{m.aanpak_insight_title()}</h2>
		<p>
			{m.aanpak_insight_p1()}
		</p>
		<p>&nbsp;</p>
		<h2>{m.aanpak_target_title()}</h2>
		<p>
			{m.aanpak_target_p1()}
		</p>
		<p>
			{m.aanpak_target_p2()}
		</p>
	</div>

	<div class="jumbotron jumbotron-fluid mt-5 yep-grijs-donker bg-onze-aanpak">
		<enhanced:img
			class="aanpak-bg-img"
			src="/static/images/onze-aanpak.jpg"
			alt="Our approach illustration"
		/>
		<div class="row mx-auto cards-container">
			{#each data as { kenmerk, aanpak }}
				<div class="col-xl-6">
					<div class="card-pair">
						<div class="card kenmerk-card">
							<div class="card-header">
								<h2>{m.aanpak_kenmerk()}</h2>
							</div>
							<div class="card-body">
								<h5>{kenmerk.title}</h5>
								{#each kenmerk.body as p}
									<p style="text-align: justify">{p}</p>
								{/each}
							</div>
						</div>
						<div class="card aanpak-card">
							<div style="text-align: center" class="card-header">
								<h2>{m.aanpak_aanpak()}</h2>
							</div>
							<div class="card-body">
								<h5>{aanpak.title}</h5>
								{#each aanpak.body as p}
									<p style="text-align: justify">{p}</p>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="jumbotron jumbotron-fluid bg-light">
		<div class="row">
			<div class="col-lg-6 p-4 d-flex justify-content-end">
				<div class="content" style="max-width: 800px;">
					<h2 class="text-center">{m.aanpak_tips_title()}</h2>
					<p>{m.aanpak_tips_p1()}</p>
					<ul>
						<li>{m.aanpak_tips_ul1()}</li>
						<li>{m.aanpak_tips_ul2()}</li>
						<li>{m.aanpak_tips_ul3()}</li>
					</ul>
				</div>
			</div>
			<div class="col-lg-6 overflow-hidden">
				<enhanced:img
					style="object-fit: cover; max-height: 400px; width: 100%"
					src="/static/images/IMG_2597.jpg"
					alt="Team collaboration"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-onze-aanpak.jumbotron {
		position: relative;
	}

	.aanpak-bg-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.cards-container {
		max-width: 1600px;
		position: relative;
		z-index: 1;
	}

	@media (max-width: 767px) {
		.cards-container {
			max-width: 100%;
		}

		.aanpak-bg-img {
			display: none;
		}
	}

	.card-pair {
		position: relative;
		padding: 20px;
	}

	/* Desktop: overlapping cards layout */
	@media (min-width: 768px) {
		.kenmerk-card {
			float: left;
			width: 50%;
			z-index: 2;
		}

		.aanpak-card {
			float: right;
			width: 70%;
			position: relative;
			top: -50px;
			z-index: 1;
		}

		.card-pair::after {
			content: '';
			display: table;
			clear: both;
		}
	}

	/* Mobile: stacked cards with alternating margins */
	@media (max-width: 767px) {
		.bg-onze-aanpak.jumbotron {
			padding: 1rem 0.5rem;
		}

		.card-pair {
			padding: 5px 0;
		}

		.kenmerk-card {
			width: 95%;
			margin-left: 0;
			margin-right: auto;
			margin-bottom: -20px;
			z-index: 1;
			position: relative;
		}

		.aanpak-card {
			width: 95%;
			margin-left: auto;
			margin-right: 0;
			margin-bottom: 20px;
			z-index: 2;
			position: relative;
		}

		.kenmerk-card .card-body,
		.aanpak-card .card-body {
			padding: 0.75rem;
		}

		.kenmerk-card .card-header,
		.aanpak-card .card-header {
			padding: 0.5rem 0.75rem;
		}
	}
</style>
