<script lang="ts">
	import type { BlogModule, ImageModule, Blog } from '$lib/types';
	import Opdrachtgevers from '$lib/components/Opdrachtgevers.svelte';
	import SpringestReviews from '$lib/components/SpringestReviews.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime.js';
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
	const blogModules = blogModulesMap[languageTag()];

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en', options);
	}

	const blogs: Blog[] = Object.entries(blogModules)
		.map(([path, module]) => ({
			path: path.replace(/\.nl\.md$/, ''),
			name:
				path
					.replace(/\.nl\.md$/, '')
					.split('/')
					.pop() || '',
			meta: module.metadata,
			content: module.default
		}))
		.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

	const blog = blogs[0];
</script>

<template lang="pug">
.container-fluid.container-left
  .row.p-0
    .col-md-6.p-0(style="height: 300px; overflow: hidden")
      enhanced:img.img-fluid(sizes="min(1280px, 100vw)" 
        src="/static/images/training-yep.jpg"
        style="position: absolute; top: -100%; left: 0; right: 0; bottom: -100%; margin: auto;"
        alt="Training Image"
      )
    .col-md-6.pt-4
      h2 {m.home_inzichtDurfVaardigheid()}
        br
        span.yep-geel-donker {m.home_voorMaatschappelijkeImpact()}

.jumbotron.jumbotron-fluid.yep-geel
  .container
    h2 {m.home_leerDrang()}
    p {m.home_wijZijnErVoorProfessionals()}
.jumbotron.jumbotron-fluid.yep-grijs-donker
  .container
    .row.justify-content-around
      .col-md-3.border.bg-light.p-2.text-center
        h2 {m.home_uitgelicht()}
        a(href="/trainingen/talent-ontwikkelprogramma" class="d-block mt-2")
          .square-img-container.text-left
            enhanced:img.square-img.thumbnail(sizes="min(1280px, 100vw)" 
              src="/static/images/uitgelicht1.png"
              alt="Uitgelicht met burealamp"
            )
          | {m.home_talentOntwikkelProgramma()} >>
      .col-md-5.border.bg-light.p-2.text-center
        h2 {m.home_reviews()}
        SpringestReviews

      .col-md-3.border.bg-light.p-2.text-center
        h2 {m.home_laatsteBlog()}
        a(href=`/blog/{blog.name}`)
          .square-img-container.text-left
            enhanced:img.square-img.thumbnail(sizes="min(1280px, 100vw)" src="{imageModules[`/content/blog/${blog.meta.img}`].default}"  alt="{blog.alt}")
          | {blog.meta.title} >>

.container-fluid.container-right.m-0
  .row
    .col-md.full-width
      br
      br
      h1.yep-geel-donker {m.home_trainingCoachingAdvies()}
      h1 {m.home_neemJeTalentSerieus()}
      br
    .col-md.p-0
      .float-right(style="max-width: 500px; width: 100%")
        enhanced:img.img-fluid(sizes="min(1280px, 100vw)" src="/static/images/Trainers_van_YEP-1.png" alt="Trainers van YEP")

.jumbotron.jumbotron-fluid.yep-grijs-donker
  Opdrachtgevers

.container-fluid.p-0
  enhanced:img.img-fluid(sizes="min(1280px, 100vw)" src="/static/images/site-foto-1-of-1-3.jpg" alt="Site Photo")

.jumbotron.jumbotron-fluid.yep-grijs-donker
  .container.text-light.border-top.border-bottom
    h1.text-center.my-4 {m.home_yepTrainingsBureau()}
    .row.justify-content-around.my-5
      .col-md-3.text-center
        enhanced:img.img-fluid(sizes="min(1280px, 100vw)" src="/static/images/wereldbol.png" alt="Maatschappelijk")
        br
        h2.mt-2 {m.home_maatschappelijk()}
        p {m.home_jouwImpactIsOnsDoel()}
      .col-md-3.text-center
        enhanced:img.img-fluid(sizes="min(1280px, 100vw)" src="/static/images/megafoon.png" alt="Actief")
        br
        h2.mt-2 {m.home_actief()}
        p {m.home_lerenDoorTeExperimenteren()}
      .col-md-3.text-center
        enhanced:img.img-fluid(sizes="min(1280px, 100vw)" src="/static/images/puzzle.png" alt="Flexibel")
        br
        h2.mt-2 {m.home_flexibel()}
        p {m.home_jouwOntwikkelVraagStaatCentraal()}
    p.text-center.my-5 {m.home_opZoekNaarCoaching()}

.jumbotron.jumbotron-fluid.yep-geel
  .container.text-center
    h1 {m.home_bekijkOnsAanbod()}
    .row.justify-content-around.mt-5
      .col-md-4.bg-light.py-2.mb-2.text-center
        h2.mb-3 {m.home_trainingen()}
        a(href="trainingen" class="d-block mt-2")
          enhanced:img.img-fluid.lazyload(sizes="min(1280px, 100vw)" src="/static/images/trainings-overzicht.png" alt="Trainingen")
          p.mt-2 {m.home_leesMeer()} >>
      .col-md-4.bg-light.py-2.mb-2.text-center
        h2.mb-3 {m.home_coaching()}
        a(href="coaching" class="d-block mt-2")
          enhanced:img.img-fluid.lazyload(sizes="min(1280px, 100vw)" src="/static/images/omgaanmetstress.jpg" alt="Coaching")
          p.mt-2 {m.home_leesMeer()} >>

</template>
