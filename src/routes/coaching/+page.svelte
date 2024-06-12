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
            enhanced:img.fluid(style="max-width: 100%; height: auto" src="/static/images/anna-stutje.jpg")
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
      enhanced:img.fluid(style="max-width: 100%; height: auto" src="/static/images/site-foto-1-of-1-3.jpg")
</template>

<style>
	.card.card-image {
		width: 100%;
		background-position: center;
		background-size: cover;
	}
	.card.card-image [class*='rgba-'] {
		border-radius: 0.25rem;
	}
	.card.card-cascade .view.view-cascade {
		border-radius: 0.25rem;
		-webkit-box-shadow:
			0 5px 11px 0 rgba(0, 0, 0, 0.18),
			0 4px 15px 0 rgba(0, 0, 0, 0.15);
		box-shadow:
			0 5px 11px 0 rgba(0, 0, 0, 0.18),
			0 4px 15px 0 rgba(0, 0, 0, 0.15);
	}
	.card.card-cascade .view.view-cascade.gradient-card-header {
		padding: 1.6rem 1rem;
		color: #fff;
		text-align: center;
	}
	.card.card-cascade .view.view-cascade.gradient-card-header .card-header-title {
		font-weight: 500;
	}
	.card.card-cascade.wider {
		background-color: transparent;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
	.card.card-cascade.wider .view.view-cascade {
		z-index: 2;
	}
	.card.card-cascade.wider .card-body.card-body-cascade {
		z-index: 1;
		margin-right: 4%;
		margin-left: 4%;
		background: #fff;
		border-radius: 0 0 0.25rem 0.25rem;
		-webkit-box-shadow:
			0 2px 5px 0 rgba(0, 0, 0, 0.16),
			0 2px 10px 0 rgba(0, 0, 0, 0.12);
		box-shadow:
			0 2px 5px 0 rgba(0, 0, 0, 0.16),
			0 2px 10px 0 rgba(0, 0, 0, 0.12);
	}
	.card.card-cascade.wider .card-body.card-body-cascade .card-footer {
		margin-right: -1.25rem;
		margin-left: -1.25rem;
	}
	.card.card-cascade.wider.reverse .card-body.card-body-cascade {
		z-index: 3;
		margin-top: -1rem;
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
	.card .btn-action {
		margin-top: -1.44rem;
		margin-bottom: -1.44rem;
	}
	.card .activator {
		position: absolute;
		right: 0;
		font-size: 1.2rem;
	}
	.card .card-reveal {
		position: absolute;
		top: 100%;
		z-index: 1;
		display: none;
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
	.card .card-reveal .content {
		position: relative;
	}
	.card.ovf-hidden {
		overflow: hidden;
	}
	.card .card-share {
		position: relative;
	}
	.card .card-share .social-reveal {
		position: absolute;
		top: -1.44rem;
		right: 1.88rem;
		width: auto;
		opacity: 0;
		-webkit-transition:
			opacity 0.35s ease,
			-webkit-transform 0.35s ease;
		transition:
			opacity 0.35s ease,
			-webkit-transform 0.35s ease;
		transition:
			transform 0.35s ease,
			opacity 0.35s ease;
		transition:
			transform 0.35s ease,
			opacity 0.35s ease,
			-webkit-transform 0.35s ease;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-transform: translateX(80px);
		transform: translateX(80px);
	}
	.card .card-share .social-reveal-active {
		z-index: 11;
		opacity: 1;
		-webkit-transition:
			opacity 0.35s ease,
			-webkit-transform 0.35s ease;
		transition:
			opacity 0.35s ease,
			-webkit-transform 0.35s ease;
		transition:
			transform 0.35s ease,
			opacity 0.35s ease;
		transition:
			transform 0.35s ease,
			opacity 0.35s ease,
			-webkit-transform 0.35s ease;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-transform: translateX(-48px);
		transform: translateX(-48px);
	}
	.card .card-reveal .card-title,
	.card-wrapper .card-rotating .card-title {
		cursor: pointer;
	}
	.card .card-reveal .card-title i,
	.card-wrapper .card-rotating .card-title i {
		position: absolute;
		right: 0.63rem;
		color: #9e9e9e;
	}
	.card-wrapper {
		position: relative;
		width: 100%;
		margin: 0;
		-webkit-perspective: 800px;
		perspective: 800px;
	}
	.card-wrapper .card-up {
		height: 200px;
		overflow: hidden;
	}
	.card-wrapper .card-up img {
		vertical-align: middle;
	}
	.card-wrapper .avatar {
		display: block;
		width: 120px;
		margin-top: -60px;
		overflow: hidden;
	}
	.card-wrapper .avatar img {
		width: 100%;
		background: none repeat scroll 0 0 #fff;
		border: 5px solid #fff;
	}
	.card-wrapper .card-rotating {
		height: 100%;
		-webkit-transition: 0.5s;
		transition: 0.5s;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}
	.card-wrapper .card-rotating .face {
		position: absolute;
		z-index: 2;
		width: 100%;
		background: #fff;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.card-wrapper .card-rotating.flipped {
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg);
	}
	.card-wrapper .card-rotating .front {
		z-index: 1;
	}
	.card-wrapper .card-rotating .back {
		-webkit-transform: rotateY(-180deg);
		transform: rotateY(-180deg);
	}
	.card-wrapper .card-rotating .front,
	.card-wrapper .card-rotating .back {
		-webkit-transition: 1s;
		transition: 1s;
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
