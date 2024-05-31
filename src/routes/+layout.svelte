<script>
	import { onMount } from 'svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '$lib/scss/custom.scss';

	onMount(() => {
		// Load Bootstrap JS if needed
		const script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js';
		script.integrity = 'sha384-Piv4xVNRyMGpqk9QfDxY4yI4f4y75Lc5iWglI1FrQxod5ou4c5TVaF5YKR7z04K';
		script.crossOrigin = 'anonymous';
		document.body.appendChild(script);
	});
</script>

<template lang="pug">
  div
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
    slot
    .jumbotron.jumbotron-fluid(style="background-color: #807d7d")
      .container
        .row
          .col-md-4.text-light
            h2 Site-map
            .row
              .col-sm-6
                | &gt;&nbsp; #[a.link-geel(href="/") Yep] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/team") Ons team] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/trainingen") Trainingen] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/coaching") Coaching] #[br]
              .col-sm-6
                | &gt;&nbsp; #[a.link-geel(href="/blog") Blog] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/tarieven") Tarieven] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/klachten") Klachten] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/contact") Contact] #[br]
          .col-md-1
          .col-md-3.text-light
            h2.mb-4 Gegevens
            p
              | Yep Trainingen #[br]
              |  #[br]
              |  #[br] #[br]
              | KvK: 58989463 #[br]
              | BTW: NL001795751B66 #[br]
              | IBAN: NL49TRIO0254729886 #[br]
          .col-md-1
          .col-md-3.text-light
            enhanced:img(src="/static/images/Logo-Yep-300x122.png", alt="yeptrainingen")
            p
            a(href="mailto:info@yeptrainingen.nl", target="_blank")
              enhanced:img(src="/static/images/email.png", alt="email")
            a(href="https://www.facebook.com/Yeptrainingen", target="_blank")
              enhanced:img(src="/static/images/facebook.png", alt="facebook")
            a(href="https://twitter.com/yeptrainingen", target="_blank")
              enhanced:img(src="/static/images/twitter.png", alt="twitter")
            a(href="https://www.linkedin.com/company/marijn-blaisse-trainingen", target="_blank")
              enhanced:img(src="/static/images/linkedin.png", alt="linkedin")
            p
            | Telefoon: 085-7606266
</template>

<style lang="scss">
	@import '$lib/scss/custom.scss';

	@include media-breakpoint-down(sm) {
		.navbar-brand > img {
			height: 50px;
		}
	}

	@include media-breakpoint-between(sm, md) {
		.navbar-brand > img {
			height: 80px;
		}
	}
</style>
