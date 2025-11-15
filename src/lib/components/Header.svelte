<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { writable } from 'svelte/store';
	const isMenuOpen = writable(false);

	let menuOpen: boolean;

	// Subscribe to the store
	isMenuOpen.subscribe((value) => {
		menuOpen = value;
	});

	// Function to toggle the menu
	function toggleMenu() {
		isMenuOpen.update((n) => !n);
	}
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container d-flex justify-content-between">
		<a class="navbar-brand" href="/">
			<enhanced:img
				class="ms-2"
				sizes="min(1280px, 100vw)"
				src="/static/images/Logo-Yep-300x122.png"
				alt="yeptrainingen"
			/>
		</a>
		<button
			class="navbar-toggler me-2"
			type="button"
			on:click={toggleMenu}
			aria-controls="nav-collapse"
			aria-expanded={menuOpen}
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="nav-collapse" class="collapse navbar-collapse {menuOpen ? 'show' : ''}">
			<ul class="navbar-nav ms-4">
				<li class="nav-item">
					<a class="nav-link" href="/">Yep</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/team">{m.header_onsTeam()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/trainingen">{m.header_trainingen()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/coaching">{m.header_coaching()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/onze-aanpak">{m.header_onzeAanpak()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/blog">{m.header_blog()}</a>
				</li>
			</ul>
			<ul class="navbar-nav ms-auto">
				<li class="nav-item">
					<LanguageSwitcher />
				</li>
			</ul>
		</div>
	</div>
</nav>
