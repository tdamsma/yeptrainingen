<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container d-flex justify-content-between">
		<a class="navbar-brand" href={localizeHref('/')}>
			<enhanced:img class="ml-2" src="/static/images/Logo-Yep-300x122.png" alt="yeptrainingen" />
		</a>
		<button
			class="navbar-toggler mr-2"
			type="button"
			data-toggle="collapse"
			data-target="#nav-collapse"
			aria-controls="nav-collapse"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="nav-collapse" class="collapse navbar-collapse">
			<ul class="navbar-nav ml-4">
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/')}>Yep</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/team')}>{m.header_onsTeam()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/trainingen')}>{m.header_trainingen()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/coaching')}>{m.header_coaching()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/onze-aanpak')}>{m.header_onzeAanpak()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={localizeHref('/blog')}>{m.header_blog()}</a>
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
	@media (max-width: 575.98px) {
		.navbar-brand :global(img) {
			height: 50px;
		}
	}

	@media (min-width: 576px) and (max-width: 767.98px) {
		.navbar-brand :global(img) {
			height: 80px;
		}
	}
</style>
