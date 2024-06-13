<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { writable } from 'svelte/store';
	const isMenuOpen = writable(false);

	let menuOpen;

	// Subscribe to the store
	isMenuOpen.subscribe((value) => {
		menuOpen = value;
	});

	// Function to toggle the menu
	function toggleMenu() {
		isMenuOpen.update((n) => !n);
	}
</script>

<template lang="pug">
    nav.navbar.navbar-expand-lg.navbar-light.bg-light
      .container.d-flex.justify-content-between
        a.navbar-brand(href="/")
          enhanced:img.ml-2(sizes="min(1280px, 100vw)" src="/static/images/Logo-Yep-300x122.png", alt="yeptrainingen")
        button.navbar-toggler.mr-2(
          type="button", 
          on:click="{toggleMenu}", 
          aria-controls="nav-collapse", 
          aria-expanded="{menuOpen}", 
          aria-label="Toggle navigation"
          )
          span.navbar-toggler-icon
        #nav-collapse.collapse.navbar-collapse(class="{ menuOpen ? 'show' : '' }" )
          ul.navbar-nav.ml-4
            li.nav-item
              a.nav-link(href="/") Yep
            li.nav-item
              a.nav-link(href="/team") {m.header_onsTeam()}
            li.nav-item
              a.nav-link(href="/trainingen") {m.header_trainingen()}
            li.nav-item
              a.nav-link(href="/coaching") {m.header_coaching()}
            li.nav-item
              a.nav-link(href="/onze-aanpak") {m.header_onzeAanpak()}
            li.nav-item
              a.nav-link(href="/blog") {m.header_blog()}
          ul.navbar-nav.ml-auto
            li.nav-item
              LanguageSwitcher
</template>
