<script lang="ts">
	import PageHead from '#lib/components/PageHead.svelte';
	import type { ImageModule, TeamMemberModule, TeamMember } from '#lib/types.js';
	import { getLocale } from '#lib/paraglide/runtime.js';
	import * as m from '#lib/paraglide/messages.js';
	import { page } from '$app/state';

	const TeamMemberModulesNl = import.meta.glob('/content/team/*.nl.md', {
		eager: true
	}) as Record<string, TeamMemberModule>;
	const TeamMemberModulesEn = import.meta.glob('/content/team/*.en.md', {
		eager: true
	}) as Record<string, TeamMemberModule>;
	const TeamMemberModulesMap = { nl: TeamMemberModulesNl, en: TeamMemberModulesEn };
	// glob imports ignore the sizes attribute, so thumbnail widths are set here
	const imageModules = import.meta.glob('/content/team/*.jpg', {
		eager: true,
		query: { enhanced: true, w: '400;800' }
	}) as Record<string, ImageModule>;

	let members = $derived(
		(() => {
			// Access page.url to make this reactive to route changes
			const _ = page.url.pathname;
			const TeamMemberModules = TeamMemberModulesMap[getLocale()];
			return Object.entries(TeamMemberModules)
				.map(([path, module]) => ({
					path: path.replace(/\.(nl|en)\.md$/, ''),
					meta: module.metadata,
					content: module.default
				}))
				.sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);
		})()
	);
</script>

<PageHead title={m.team_heading()} description={m.team_paragraaf1()} />

<div>
	<div class="jumbotron jumbotron-fluid yep-geel">
		<div class="row justify-content-around">
			<h1>{m.team_heading()}</h1>
		</div>
	</div>

	<div class="container mt-4">
		<p>
			{m.team_paragraaf1()}
		</p>

		<div class="row justify-content-around mb-4">
			{#each members as member}
				<div class="col-sm-6 col-md-4 col-lg-3 mt-4 py-3 bg-white">
					<enhanced:img
						class="img-fluid"
						sizes="(min-width: 992px) 25vw, (min-width: 768px) 33vw, (min-width: 576px) 50vw, 100vw"
						src={imageModules[`${member.path}.jpg`].default}
						alt={member.meta.name}
						title={member.meta.name}
					></enhanced:img>

					<h2 class="text-center mt-1">{member.meta.name}</h2>
					<member.content />
				</div>
			{/each}
		</div>
	</div>
</div>
