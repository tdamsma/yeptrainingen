<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<template lang="pug">
    nav.navbar.navbar-expand-lg.navbar-light.bg-light
      .container.d-flex.justify-content-between
        a.navbar-brand(href="/")
          enhanced:img.ml-2(src="/static/images/Logo-Yep-300x122.png", alt="yeptrainingen")
        button.navbar-toggler.mr-2(type="button", data-toggle="collapse", data-target="#nav-collapse", aria-controls="nav-collapse", aria-expanded="false", aria-label="Toggle navigation")
          span.navbar-toggler-icon
        #nav-collapse.collapse.navbar-collapse
          ul.navbar-nav.ml-4
            li.nav-item
              a.nav-link(href="/") Yep
            li.nav-item
              a.nav-link(href="/team") Ons team
            li.nav-item
              a.nav-link(href="/trainingen") Trainingen
            li.nav-item
              a.nav-link(href="/coaching") Coaching
            li.nav-item
              a.nav-link(href="/onze-aanpak") Onze aanpak
            li.nav-item
              a.nav-link(href="/blog") Blog
          ul.navbar-nav.ml-auto
            li.nav-item
              LanguageSwitcher
</template>
