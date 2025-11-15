<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container d-flex justify-content-between">
		<a class="navbar-brand" href={localizeHref('/')}>
			<enhanced:img class="ml-2" src="/static/images/Logo-Yep-300x122.png" alt="yeptrainingen" />
		</a>
		<button
			class="navbar-toggler mr-2"
			type="button"
			onclick={toggleMenu}
			aria-controls="nav-collapse"
			aria-expanded={isMenuOpen}
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="nav-collapse" class="collapse navbar-collapse {isMenuOpen ? 'show' : ''}">
			<ul class="navbar-nav ml-4">
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/')} onclick={closeMenu}>Yep</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/team')} onclick={closeMenu}
						>{m.header_ons_team()}</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/trainingen')} onclick={closeMenu}
						>{m.header_trainingen()}</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/coaching')} onclick={closeMenu}
						>{m.header_coaching()}</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/onze-aanpak')} onclick={closeMenu}
						>{m.header_onze_aanpak()}</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/blog')} onclick={closeMenu}>{m.header_blog()}</a>
				</li>
			</ul>
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<LanguageSwitcher />
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.navbar-brand :global(img) {
		max-height: 100px;
		width: auto;
		max-width: 100%;
	}

	@media (max-width: 575.98px) {
		.navbar-brand :global(img) {
			max-height: 50px;
		}
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		.navbar-brand :global(img) {
			max-height: 80px;
		}
	}
</style>
