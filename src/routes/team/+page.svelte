<script lang="ts">
	import type { ImageModule, TeamMemberModule, TeamMember } from '$lib/types';
	import { getLocale } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/stores';
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

	const imageModules = import.meta.glob('$content/team/*.jpg', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, ImageModule>;

	let members = $derived(
		(() => {
			// Access $page.url to make this reactive to route changes
			const _ = $page.url.pathname;
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
						sizes="min(1280px, 100vw)"
						src={imageModules[`${member.path}.jpg`].default}
						alt={member.meta.name}
						title={member.meta.name}
					/>
					<h2 class="text-center mt-1">{member.meta.name}</h2>

					<member.content />
				</div>
			{/each}
		</div>
	</div>
</div>
