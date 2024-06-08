<script>
	import kenmerkenNl from './onze-aanpak.nl.json';
	import kenmerkenEn from './onze-aanpak.en.json';
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime.js';

	const kenmerkenMap = {
		nl: kenmerkenNl,
		en: kenmerkenEn
	};
	let data = kenmerkenMap[languageTag()];
</script>

<template lang="html">
	<div class="container-fluid m-0 p-0 bg-white">
		<div class="jumbotron jumbotron-fluid yep-geel">
			<div class="row justify-content-around">
				<h1>{m.aanpak_title()}</h1>
			</div>
		</div>
		<div class="row overflow-hidden max-height-550">
			<div class="col-lg-6 overflow-hidden">
				<enhanced:img class="fluid" src="/static/images/onze-aanpak-1.jpg" />
			</div>
			<div class="col-lg-6 p-3 m-0">
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
			<enhanced:img src="/static/images/onze-aanpak.jpg" />
			<div class="row">
				{#each data as { kenmerk, aanpak }}
					<div class="col-xl-6">
						<div class="container">
							<div class="card" style="float: left; width: 50%; z-index: 2">
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
							<div
								class="card"
								style="float: right; width: 70%; position: relative; top: -50px; z-index: auto"
							>
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
				<div class="col-lg-6 p-4">
					<h2 class="text-center">{m.aanpak_tips_title()}</h2>
					<p>
						{m.aanpak_tips_p1()}
					</p>
					<ul>
						<li>
							{m.aanpak_tips_ul1()}
						</li>
						<li>
							{m.aanpak_tips_ul2()}
						</li>
						<li>
							{m.aanpak_tips_ul3()}
						</li>
					</ul>
				</div>
				<div class="col-lg-6 max-height-550 overflow-hidden">
					<enhanced:img fluid="fluid" blank-color="#777" src="/static/images/IMG_2597.jpg" />
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.bg-onze-aanpak.jumbotron img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.bg-onze-aanpak.jumbotron {
		position: relative;
	}
</style>
