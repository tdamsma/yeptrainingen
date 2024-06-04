<template lang="pug">
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
