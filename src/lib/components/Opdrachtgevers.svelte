<script lang="ts">
	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import type { ImageModule, Opdrachtgever, OpdrachtgeverModule } from '$lib/types';

	const imageModules = import.meta.glob(
		'$content/opdrachtgevers/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;

	const opdrachtgeverModules = import.meta.glob('$content/opdrachtgevers/*.json', {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, OpdrachtgeverModule>;

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en', options);
	}

	const opdrachtgevers: Opdrachtgever[] = Object.entries(opdrachtgeverModules).map(
		([path, module]) => ({
			name: path.replace(/\.json$/, ''),
			url: module.url,
			opdrachtgever: module.opdrachtgever
		})
	);

	let t = 0;
	const transitionTimeMS = 2500;
	const opdrachtgeversDoubled = [...opdrachtgevers, ...opdrachtgevers];

	$: selectedOpdrachtgevers = opdrachtgeversDoubled.slice(t, t + 11);

	setInterval(() => {
		t = (t + 1) % opdrachtgevers.length;
	}, transitionTimeMS);
</script>

<div class="overflow-container">
	<h1 class="text-center text-light">Opdrachtgevers</h1>

	<div class="flexcontainer-wrapper-wrapper">
		<div class="flexcontainer-wrapper">
			<div class="flexcontainer">
				{#each selectedOpdrachtgevers as opdrachtgever (opdrachtgever.opdrachtgever)}
					<div
						class="panel"
						transition:slide={{ delay: 0, duration: transitionTimeMS, easing: linear, axis: 'x' }}
					>
						{#if opdrachtgever.url !== ''}
							<a href={opdrachtgever.url}>
								<enhanced:img
									src={imageModules[`${opdrachtgever.name}.png`].default}
									alt={opdrachtgever.opdrachtgever}
									title={opdrachtgever.opdrachtgever}
								/>
							</a>
						{:else}
							<enhanced:img
								src={imageModules[`${opdrachtgever.name}.png`].default}
								alt={opdrachtgever.opdrachtgever}
								title={opdrachtgever.opdrachtgever}
							/>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style scoped>
	img {
		width: 200px;
		height: auto;
		max-height: 200px;
	}

	.overflow-container {
		overflow: hidden;
		width: 100%;
	}

	h1 {
		text-align: center;
		color: #ffffff;
	}

	.flexcontainer-wrapper-wrapper {
		display: flex;
		justify-content: center;
	}
	.flexcontainer-wrapper {
		display: flex;
		overflow: hidden;
		width: 2000px;
	}

	.flexcontainer {
		width: 2400px;
		display: flex;
		margin-left: -200px;
	}

	.panel {
		width: 200px;
		padding: 0;
		overflow: hidden;
	}
</style>
