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
      enhanced:img.img-fluid(
        src="/static/images/training-yep.jpg"
        style="position: absolute; top: -100%; left: 0; right: 0; bottom: -100%; margin: auto;"
        alt="Training Image"
      )
    .col-md-6.pt-4
      h2 {m.home_insightCourageSkill()}
        br
        span.yep-geel-donker {m.home_forSocialImpact()}

.jumbotron.jumbotron-fluid.yep-geel
  .container
    h2 {m.home_learningDesire()}
    p {m.home_weAreForProfessionals()}
.jumbotron.jumbotron-fluid.yep-grijs-donker
  .container
    .row.justify-content-around
      .col-md-3.border.bg-light.p-2.text-center
        h2 {m.home_highlighted()}
        a(href="/trainingen/talent-ontwikkelprogramma" class="d-block mt-2")
          .square-img-container.text-left
            enhanced:img.square-img.thumbnail(
              src="/static/images/uitgelicht1.png"
              alt="Uitgelicht met burealamp"
            )
          | {m.home_talentDevelopmentProgram()} >>
      .col-md-5.border.bg-light.p-2.text-center
        h2 {m.home_reviews()}
        SpringestReviews

      .col-md-3.border.bg-light.p-2.text-center
        h2 {m.home_latestBlog()}
        a(href=`/blog/{blog.name}`)
          .square-img-container.text-left
            enhanced:img.square-img.thumbnail(src="{imageModules[`/content/blog/${blog.meta.img}`].default}"  alt="{blog.alt}")
          | {blog.meta.title} >>

.container-fluid.container-right.m-0
  .row
    .col-md.full-width
      br
      br
      h1.yep-geel-donker {m.home_trainingCoachingAdvice()}
      h1 {m.home_takeYourTalentSeriously()}
      br
    .col-md.p-0
      .float-right(style="max-width: 500px; width: 100%")
        enhanced:img.img-fluid(src="/static/images/Trainers_van_YEP-1.png" alt="Trainers van YEP")

.jumbotron.jumbotron-fluid.yep-grijs-donker
  Opdrachtgevers

.container-fluid.p-0
  enhanced:img.img-fluid(src="/static/images/site-foto-1-of-1-3.jpg" alt="Site Photo")

.jumbotron.jumbotron-fluid.yep-grijs-donker
  .container.text-light.border-top.border-bottom
    h1.text-center.my-4 {m.home_yepTrainingAgency()}
    .row.justify-content-around.my-5
      .col-md-3.text-center
        enhanced:img.img-fluid(src="/static/images/wereldbol.png" alt="Maatschappelijk")
        br
        h2.mt-2 {m.home_social()}
        p {m.home_yourImpactIsOurGoal()}
      .col-md-3.text-center
        enhanced:img.img-fluid(src="/static/images/megafoon.png" alt="Actief")
        br
        h2.mt-2 {m.home_active()}
        p {m.home_learnByExperimenting()}
      .col-md-3.text-center
        enhanced:img.img-fluid(src="/static/images/puzzle.png" alt="Flexibel")
        br
        h2.mt-2 {m.home_flexible()}
        p {m.home_yourDevelopmentQuestionIsCentral()}
    p.text-center.my-5 {m.home_lookingForCoaching()}

.jumbotron.jumbotron-fluid.yep-geel
  .container.text-center
    h1 {m.home_checkOurOffer()}
    .row.justify-content-around.mt-5
      .col-md-4.bg-light.py-2.mb-2.text-center
        h2.mb-3 {m.home_trainings()}
        a(href="trainingen" class="d-block mt-2")
          enhanced:img.img-fluid.lazyload(src="/static/images/trainings-overzicht.png" alt="Trainingen")
          p.mt-2 {m.home_readMore()} >>
      .col-md-4.bg-light.py-2.mb-2.text-center
        h2.mb-3 {m.home_coaching()}
        a(href="coaching" class="d-block mt-2")
          enhanced:img.img-fluid.lazyload(src="/static/images/omgaanmetstress.jpg" alt="Coaching")
          p.mt-2 {m.home_readMore()} >>

</template>
