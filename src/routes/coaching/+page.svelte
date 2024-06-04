<script lang="ts">
	import { onMount } from 'svelte';
	import type { CoachingModule, ImageModule, Coaching } from '$lib/types';

	const imageModules = import.meta.glob(
		'$content/coaching/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;

	const coachingModules = import.meta.glob('$content/coaching/*.nl.md', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, CoachingModule>;

	let coachings: Coaching[] = [];

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en', options);
	}

	onMount(() => {
		coachings = Object.entries(coachingModules).map(([path, module]) => ({
			path: path.replace(/\.nl\.md$/, ''),
			name:
				path
					.replace(/\.nl\.md$/, '')
					.split('/')
					.pop() || path,
			meta: module.metadata,
			content: module.default
		}));
		// .sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);
	});
</script>

<template lang="pug">
  .container-fluid.p-0.m-0
    .jumbotron.jumbotron-fluid.yep-geel
      .container
        .row.justify-content-around
          h1 Coaching
    .container.mb-5.mt-4
      p
        | Yep verzorgt coaching voor gedreven professionals waarin het vergroten van je kracht en effect centraal staat. Coaching biedt in twee gevallen uitkomst: wanneer jij (of je medewerker) een erg specifiek leerdoel hebt, waarbij een groepstraining niet nauw aansluit, of wanneer je behoefte hebt aan persoonlijke begeleiding. De coaching kan op zichzelf staan of een aanvulling vormen op een (talenten)programma. Om een idee te krijgen van de thema’s waarop wij andere professionals al hebben begeleid, kun je hieronder een kijkje nemen.
      p
        | Vraag je je af of wij je kunnen begeleiden met jouw specifieke ontwikkeldoel? Dan is het handig om even contact op te nemen! Hier staan onze tarieven. Alle trajecten zijn zowel online als face-to-face beschikbaar en geschikt voor zowel particulieren, ondernemers als medewerkers.
        br
        | We werken doorgaans met een traject van 5 tot 8 sessies. Tijdens een kosteloze intake bepalen we de precieze aanpak.
      h2.text-center.mb-3.mt-5 Coachingsmogelijkheden
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

   
    .container-fluid.p-0.m-0
      .container.mb-5.mt-4
        p
          | Yep verzorgt coaching voor gedreven professionals waarin het vergroten van je kracht en effect centraal staat. Coaching biedt in twee gevallen uitkomst: wanneer jij (of je medewerker) een erg specifiek leerdoel hebt, waarbij een groepstraining niet nauw aansluit, of wanneer je behoefte hebt aan persoonlijke begeleiding. De coaching kan op zichzelf staan of een aanvulling vormen op een (talenten)programma. Om een idee te krijgen van de thema’s waarop wij andere professionals al hebben begeleid, kun je hieronder een kijkje nemen.
        p
          | Vraag je je af of wij je kunnen begeleiden met jouw specifieke ontwikkeldoel? Dan is het handig om even contact op te nemen! Hier staan onze tarieven. Alle trajecten zijn zowel online als face-to-face beschikbaar en geschikt voor zowel particulieren, ondernemers als medewerkers.
          br
          | We werken doorgaans met een traject van 5 tot 8 sessies. Tijdens een kosteloze intake bepalen we de precieze aanpak.
    .jumbotron.jumbotron-fluid.bg-white.m-0
      .container-fluid
        span.text-center
          h2 Onze visie
          p
            | Een coachingstraject ziet er altijd anders uit. Veel mensen hebben aan een of twee sessies voldoende richting om weer zelfstandig verder te gaan. Anderen geven de voorkeur aan langdurig contact waarbij ze bijvoorbeeld kunnen sparren over steeds andere aspecten van hun functie of samenwerking. Hoewel de coaching zelf sterk kan verschillen in duur en inhoud is onze visie steeds hetzelfde. Wij geloven dat ieder zelf de informatie en vaardigheden in huis heeft om verder te komen met een plan of doel. Coaching helpt om de aandacht te richten, een stok achter de deur te hebben, te reflecteren, tot nieuw inzichten te komen, een overwogen keuze te maken. Dit zorgt ervoor dat een deelnemer zelf de controle houdt, keuzes maakt waar hij echt achter staat en niet afhankelijk wordt van de coach.
      .jumbotron.jumbotron-fluid.bg-white.m-0
        .row
          .col-lg-4
            enhanced:img.fluid(style="max-width: 100%; height: auto" src="/static/images/anna-stutje.jpg")
          .col-lg-8.p-4
            p
              | Als je aan de slag wilt met coaching, neem dan contact op met
              a(rel="noreferrer noopener", href="/contact/", target="_blank") Anna Stutje
              | . Zij is aangesloten bij de beroepsorganisatie voor coaches (NOBCO) en werkt volgens de Internationale Ethische Code voor coaches. Zij neemt de coaching op zich of brengt je in contact met één van de andere coaches.
            p Coachees over Anna:
            p.rand-links-groen
              i “Anna heeft me geholpen om structuur aan te brengen in de crisis die ik ervaarde in mijn werkende leven. Ze houdt je bij de les en leert je te reflecteren waardoor de coachingssessies doeltreffend zijn. De opdrachten die je mee naar huis krijgt leveren enorm veel op. Het heeft er voor gezorgd dat ik belangrijke keuzes in mijn werk heb kunnen maken en mijn zelfinzicht gegroeid is. Een super fijne gesprekspartner die je laat groeien!” – Vera
            p.rand-links-groen
              i “The coaching with Anna has helped me immensely to listen to my own feelings whilst making some important life decisions. She provided me with a tool that helps me to reflect on my choices and behaviour. Anna knows how to create a setting that helps to open up easily. I would definitely recommend her as a coach.” – Vincent
            p.rand-links-groen
              i “Anna heeft me geholpen bij het formuleren van mijn ‘Why’. Ik zie nu hoe belangrijk het is om een duidelijk beeld van mijn purpose te hebben. Dit heeft geleid tot een veel scherper beeld van de loopbaanstap die ik wil nemen en ik voel nu veel meer zelfvertrouwen om me in mijn netwerk te profileren. Ik heb daarnaast ook nog inzicht gekregen in verschillende kanten van mezelf die soms (ongewenst) de overhand nemen.” – Emma
      .row.bg-light
        .col-lg-3.text-center.p-4
          h4 Intake
          | We maken kennis, bepalen wat je wilt bereiken en stellen samen de aanpak vast.
        .col-lg-3.text-center.p-4
          h4 Zelfonderzoek
          | We gaan aan de slag met het vergroten van je zelfkennis om inzicht te krijgen in je verlangens, talenten, valkuilen en uitdagingen. Tussentijdse opdrachten helpen daarbij.
        .col-lg-3.text-center.p-4
          h4 Versterken persoonlijk leiderschap
          | Weten wat je anders wilt is één ding. Voelen dat je zelf invloed hebt is een belangrijke tweede, zodat je regie kan nemen over jouw situatie.
        .col-lg-3.text-center.p-4
          h4 Borging
          | Aan het eind van een traject kijken we vooruit en besteden we aandacht aan wat er nodig is om het geleerde ook in de toekomst in de praktijk te blijven brengen.
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
