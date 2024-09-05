<script lang="ts">
	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import springest_data from './reviews.json';
	import { onMount, onDestroy } from 'svelte';
	const data: Reviews = springest_data;
	const reviews = data.reviews;
	interface Review {
		TrainingReview: {
			id: number;
			description: string;
			rating: string;
		};
	}

	interface Reviews {
		random_id: number;
		average: string;
		amount: number;
		reviews: Review[];
	}

	const reviewsDoubled = [...reviews, ...reviews];

	let t = 0;
	const transitionTimeMS = 4000;
	let selectedReviews: Review[] = [];
	$: selectedReviews = reviewsDoubled.slice(t, t + 4);

	setInterval(() => {
		t = (t + 1) % reviews.length;
	}, transitionTimeMS);

	let modalVisible = false;

	function truncate(str: string, n: number, useWordBoundary: string) {
		if (str.length <= n) {
			return str;
		}
		const subString = str.substr(0, n - 1);
		return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + '...';
	}

	function closeModal() {
		modalVisible = false;
	}
	function handleClickOutside(event: MouseEvent) {
		if (event.target && (event.target as HTMLElement).classList.contains('modal')) {
			modalVisible = false;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			modalVisible = false;
		}
	}

	onMount(() => {
		if (typeof document !== 'undefined') {
			document.addEventListener('keydown', handleKeydown);
		}
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

<div
	class="container"
	style="height: 300px; overflow: hidden"
	role="button"
	tabindex="0"
	aria-label="Open Reviews Modal"
	on:click={() => (modalVisible = true)}
	on:keydown={(e) => (e.key === 'Enter' ? (modalVisible = true) : null)}
>
	{#each selectedReviews as review (review.TrainingReview.id)}
		<div
			class="panel"
			transition:slide={{ delay: 0, duration: transitionTimeMS, easing: linear, axis: 'y' }}
		>
			<div class="d-flex">
				<div class="pt-5 flex-fill">
					<h1 style="width:100px">
						<span class="b-badge primary">{review.TrainingReview.rating}</span>
					</h1>
				</div>
				<div>
					<blockquote class="blockquote">
						<p class="mb-1" style="font-size: smaller">
							{@html truncate(review.TrainingReview.description, 200, '...')}
						</p>
					</blockquote>
				</div>
			</div>
		</div>
	{/each}
</div>

{#if modalVisible}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="modal"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modalTitle"
		tabindex="0"
		on:click={handleClickOutside}
		on:keydown={(e) => (e.key === 'Escape' ? closeModal() : null)}
	>
		<div class="modal-header">
			<button class="btn btn-sm" aria-label="Close" on:click={closeModal}>Terug</button>
			<h5 id="modalTitle">Springest Reviews</h5>
			<div class="text-muted">
				<i
					>Wegens extreme prijsverhoging niet meer beschikbaar via Springest, maar gewoon bij <a
						href="mailto:marijn@yeptrainingen.nl">ons</a
					></i
				>
			</div>
		</div>
		<div class="modal-body">
			<iframe
				class="container-fluid"
				style="padding: 0px; height: 100%; width: 100%;"
				src="https://www.springest.nl/yep-trainingen-2?widget=1"
				title="Springest Reviews"
			></iframe>
		</div>
		<div class="modal-footer">
			<button class="btn btn-sm" aria-label="Close" on:click={closeModal}>Terug</button>
		</div>
	</div>
{/if}

<style>
	.container {
		height: 300px;
		overflow: hidden;
		margin: 5px;
		padding-left: 0px;
		padding-right: 10px;
	}
	.panel {
		background-color: #fff;
		text-align: justify;
		text-justify: inter-word;
		margin-bottom: 10px;
		padding-left: 10px;
		padding-right: 10px;
	}
	.modal {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
	.modal-header,
	.modal-footer {
		padding: 1rem;
		background: #fff;
		max-width: 600px;
		margin: 0 auto;
	}
	.modal-body {
		padding: 1rem;
		background: #fff;
		height: calc(100% - 4rem);
		max-width: 600px;
		margin: 0 auto;
	}
	.modal-body iframe {
		width: 100%;
		height: 100%;
	}
</style>
