<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<template lang="pug">
    .jumbotron.jumbotron-fluid(style="background-color: #807d7d")
      .container
        .row
          .col-md-4.text-light
            h2 Site-map
            .row
              .col-sm-6
                | &gt;&nbsp; #[a.link-geel(href="/") {m.footer_home()}] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/team") {m.footer_team()}] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/trainingen") {m.footer_trainingen()}] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/coaching") {m.footer_coaching()}] #[br]
              .col-sm-6
                | &gt;&nbsp; #[a.link-geel(href="/blog") {m.footer_blog()}] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/tarieven") {m.footer_tarieven()}] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/klachten") {m.footer_klachten()}] #[br]
                | &gt;&nbsp; #[a.link-geel(href="/contact") {m.footer_contact()}] #[br]
          .col-md-1
          .col-md-3.text-light
            h2.mb-4 {m.footer_gegevens()}
            p
              | Yep Trainingen #[br]
              | KvK: 58989463 #[br]
              | BTW: NL001795751B66 #[br]
              | IBAN: NL49TRIO0254729886 #[br]
          .col-md-1
          .col-md-3.text-light
            enhanced:img(sizes="min(1280px, 100vw)" src="/static/images/Logo-Yep-300x122.png", alt="yeptrainingen")
            p
            a(href="mailto:info@yeptrainingen.nl", target="_blank")
              enhanced:img(sizes="min(1280px, 100vw)" src="/static/images/email.png", alt="email")
            a(href="https://www.linkedin.com/company/yeptrainingen", target="_blank")
              enhanced:img(sizes="min(1280px, 100vw)" src="/static/images/linkedin.png", alt="linkedin")
            a(href="https://www.instagram.com/yeptrainingen", target="_blank" style="width:42px; height:42px")
              enhanced:img(sizes="min(1280px, 100vw)" src="/static/images/instagram.png", alt="instagram")
            p
            | {m.footer_telefoon()}
</template>
