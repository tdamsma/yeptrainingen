<template lang="pug">
div
  .jumbotron.jumbotron-fluid.yep-geel
    .container
      h1.display-4 Benieuwd naar het digitale aanbod van Yep?
      p
        | Doordat fysieke trainingen in deze tijd niet altijd wenselijk zijn,
        |
        a(href="https://yeptrainingen.nl/trainingsaanbod/") begeleiden wij je ook graag digitaal!
  .container-fluid.container-right
    .row
      .container
        .div(style='float: left; max-width: 600px; width: 100%')
          b-img(
            fluid
            blank-color="#777",
            src="~/assets/images/training-yep.jpg",
            :srcset="require('~/assets/images/training-yep.jpg?sizes[]=233&sizes[]=566').srcSet"
          )
        .text-overlay.yep-geel
          h1.title
            div(style='text-decoration: underline;') INZICHT, DURF EN VAARDIGHEID
            div VOOR MAATSCHAPPELIJKE IMPACT
          h2.subtitle Trainings- en coachingsbureau voor gedreven professionals
  .jumbotron.jumbotron-fluid.yep-geel
    .container

  .container-fluid.container-right
    .row
      .col-md.full-width
        br
        br
        h1.display-4 Neem je talenten serieus.
        br
      .col-md
        .div(style='float: right; max-width: 500px; width: 100%')
          b-img(
            fluid
            blank-color="#777",
            src="~/assets/images/Trainers_van_YEP-1.png",
            :srcset="require('~/assets/images/Trainers_van_YEP-1.png?sizes[]=233&sizes[]=566').srcSet"
          )

  .jumbotron.jumbotron-fluid.yep-geel
    .container
      h2 De drang om te leren.
      h2 Wij zien het bij zo veel professionals.
      h2 En we weten hoe graag organisaties daar ruimte voor willen maken.
      p Wij zijn er voor professionals die staan te popelen om hun stem verder te ontdekken en te laten horen. Die een idee hebben over hoe het anders kan en willen weten hoe ze dat binnen hun organisatie waar kunnen maken. Die soms nog aan zichzelf twijfelen en merken dat organisaties complex zijn. Maar die zich razendsnel nieuwe vaardigheden eigen willen maken. Enerzijds om zelf te groeien, anderzijds omdat ze weten dat ze een tastbare bijdrage kunnen leveren aan de organisatie en de samenleving als ze echt ergens voor durven staan.

  .jumbotron.jumbotron-fluid
    .container
      h1 Yep is hét trainingsbureau voor gedreven professionals.
      h2 Krachtig
      p In korte tijd zichtbaar effectief.
      h2 Actief
      p Leren door te experimenteren.
      h2 Flexibel
      p Jouw ontwikkelvraag staat centraal.
      p Voorbeelden van onze trainingen en case studies vind je hier. Op zoek naar coaching voor jezelf of je medewerkers? Lees hier verder.
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>
