<script lang="ts">
	import { onMount } from 'svelte';
	import type { ImageModule, TeamMemberModule, TeamMember } from '$lib/types';
	import { languageTag } from '$lib/paraglide/runtime.js';
	const TeamMemberModulesNl = import.meta.glob('$content/team/*.nl.md', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, TeamMemberModule>;
	const TeamMemberModulesEn = import.meta.glob('$content/team/*.en.md', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, TeamMemberModule>;

	const TeamMemberModulesMap = {
		nl: TeamMemberModulesNl,
		en: TeamMemberModulesEn
	};
	const TeamMemberModules = TeamMemberModulesMap[languageTag()];

	const imageModules = import.meta.glob('$content/team/*.jpg', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, ImageModule>;
	const members: TeamMember[] = Object.entries(TeamMemberModules)
		.map(([path, module]) => ({
			path: path.replace(/\.(nl|en)\.md$/, ''),
			meta: module.metadata,
			content: module.default
		}))
		.sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);
</script>

<template lang="pug">
  div
    .jumbotron.jumbotron-fluid.yep-geel
      .row.justify-content-around
        h1 Ons team

    .container.mt-4
      p
        | Yep is een klein, actief trainingsbureau gevestigd in Amsterdam en Voorburg. Wij verzorgen trainingen op het gebied van samenwerken en persoonlijke
        | effectiviteit voor ambitieuze professionals. Het resultaat van onze trainingen staat altijd voorop. Wij streven naar de persoonlijke ontwikkeling van
        | deze professionals, om zo de effectiviteit van organisaties te vergroten. Pas als dat lukt zijn wij tevreden!

      .row.justify-content-around.mb-1
        +each('members as member')
         
          .col-sm-6.col-md-4.col-lg-3.mt-4.py-3.bg-white
            enhanced:img.img-fluid(src="{imageModules[`${member.path}.jpg`].default}" alt="{member.meta.name}" title="{member.meta.name}")    
            h2.text-center.mt-1 {member.meta.name}
            svelte:component(this="{member.content}")
</template>
