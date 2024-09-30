<script lang="ts">
	import { onMount } from 'svelte';
	import type { CoachingModule, ImageModule, Coaching } from '$lib/types';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';

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
	const coachingModules = coachingModulesMap[languageTag()];

	let coachings: Coaching[] = [];

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en', options);
	}

	onMount(() => {
		coachings = Object.entries(coachingModules)
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
	});
</script>

<template lang="pug">
  .container-fluid.p-0.m-0
    .jumbotron.jumbotron-fluid.yep-geel
      .container
        .row.justify-content-around
          h1 {m.coaching_titel()}
    .container.mb-5.mt-4
      p
        | {m.coaching_intro()}
      p
        | {m.coaching_vraag()}
        br
        | {m.coaching_werkwijze()}
      h2.text-center.mb-3.mt-5 {m.coaching_overzicht()}
      .row.row-cols-1.row-cols-md-3
        +each('coachings as coaching')
          .col.mb-4
            .card.card-cascade.narrower.min-height-330
              .view.view-cascade.overlay
                .container2(style="height: 60%")
                  .rect-img-container
                    enhanced:img.rect-img.card-img-top.card-img(src="{imageModules[`/content/coaching/${coaching.meta.img}`].default}" sizes="50vw" alt=`{coaching.meta.alt}`)
                    a(href="#!")
                      .mask.rgba-white-slight
                .card-body.card-body-cascade(style="min-height: 105px")
                  h4.card-title {coaching.meta.title}
                  a.stretched-link.font-bold(href="/coaching/{coaching.name}")
    .jumbotron.bg-white.m-0
      .container
        span.text-center
          h2 {m.coaching_visie()}
          p
          | {m.coaching_visie_text()}
      .jumbotron.jumbotron.bg-white.m-0
        .row
          .col-lg-4
            enhanced:img.fluid(sizes="min(1280px, 100vw)" style="max-width: 100%; height: auto" src="/static/images/anna-stutje.jpg")
          .col-lg-8.p-4(style="max-width: 800px;")
            p Coachees over Anna:
            p.rand-links-groen
              i “Anna heeft me geholpen om structuur aan te brengen in de crisis die ik ervaarde in mijn werkende leven. Ze houdt je bij de les en leert je te reflecteren waardoor de coachingssessies doeltreffend zijn. De opdrachten die je mee naar huis krijgt leveren enorm veel op. Het heeft er voor gezorgd dat ik belangrijke keuzes in mijn werk heb kunnen maken en mijn zelfinzicht gegroeid is. Een super fijne gesprekspartner die je laat groeien!” – Vera
            p.rand-links-groen
              i “The coaching with Anna has helped me immensely to listen to my own feelings whilst making some important life decisions. She provided me with a tool that helps me to reflect on my choices and behaviour. Anna knows how to create a setting that helps to open up easily. I would definitely recommend her as a coach.” – Vincent
            p.rand-links-groen
              i “Anna heeft me geholpen bij het formuleren van mijn ‘Why’. Ik zie nu hoe belangrijk het is om een duidelijk beeld van mijn purpose te hebben. Dit heeft geleid tot een veel scherper beeld van de loopbaanstap die ik wil nemen en ik voel nu veel meer zelfvertrouwen om me in mijn netwerk te profileren. Ik heb daarnaast ook nog inzicht gekregen in verschillende kanten van mezelf die soms (ongewenst) de overhand nemen.” – Emma
      .row.bg-light
        .col-lg-3.text-center.p-4
          h4 {m.coaching_intake()}
          | {m.coaching_intake_text()}
        .col-lg-3.text-center.p-4
          h4 {m.coaching_self_examination()}
          | {m.coaching_self_examination_text()}
        .col-lg-3.text-center.p-4
          h4 {m.coaching_personal_leadership()}
          | {m.coaching_personal_leadership_text()}
        .col-lg-3.text-center.p-4
          h4 {m.coaching_consolidation()}
          | {m.coaching_consolidation_text()}
      enhanced:img.fluid(sizes="min(1280px, 100vw)" style="max-width: 100%; height: auto" src="/static/images/site-foto-1-of-1-3.jpg")
</template>

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
