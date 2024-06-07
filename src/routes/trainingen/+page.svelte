<script lang="ts">
	import { onMount } from 'svelte';
	import type { TrainingModule, ImageModule, Training } from '$lib/types';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';
	const imageModules = import.meta.glob(
		'$content/trainingen/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;

	const TrainingModulesNl = import.meta.glob('$content/trainingen/*.nl.md', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, TrainingModule>;
	const TrainingModulesEn = import.meta.glob('$content/trainingen/*.en.md', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, TrainingModule>;

	const TrainingModulesMap = {
		nl: TrainingModulesNl,
		en: TrainingModulesEn
	};
	const TrainingModules = TrainingModulesMap[languageTag()];

	let trainings: Training[] = [];

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en', options);
	}

	onMount(() => {
		trainings = Object.entries(TrainingModules)
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
    div
      .jumbotron.jumbotron-fluid.yep-geel
        .row.justify-content-around
          h1 {m.training_titel()}

      .container.mb-5.mt-4
        p
          | {m.training_intro()}
        p.text-center
          | {m.training_tarievenText()} 
          a.link-groen(href="/tarieven") {m.training_tarievenLink()}
        h2.text-center.mb-3.mt-5 {m.training_overzicht()}
        .row.row-cols-1.row-cols-md-3
          +each('trainings as training')
            .col.mb-4
              .card.card-cascade.narrower.min-height-330
                .view.view-cascade.overlay
                  .container2(style="height: 60%")
                    .rect-img-container
                      enhanced:img.rect-img.card-img-top.card-img(src="{imageModules[`/content/trainingen/${training.meta.img}`].default}" sizes="50vw" alt=`{training.meta.alt}`)
                      a(href="#!")
                        .mask.rgba-white-slight
                  .card-body.card-body-cascade(style="min-height: 105px")
                    h4.card-title {training.meta.title}
                    a.stretched-link.font-bold(href="/trainingen/{training.name}")
</template>

<style lang="css">
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
