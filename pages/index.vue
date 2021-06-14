<template lang="pug">
div
  .jumbotron.jumbotron-fluid
    .container
      h1.display-4 Benieuwd naar het digitale aanbod van Yep?
      p.lead
        | Doordat fysieke trainingen in deze tijd niet altijd wenselijk zijn,
        |
        a(href="https://yeptrainingen.nl/trainingsaanbod/") begeleiden wij je ook graag digitaal!
  .container-fluid.container-right
    .row
      .container
        b-img(
          width=600,
          blank-color="#777",
          src="~/assets/images/training-yep.jpg",
          :srcset="require('~/assets/images/training-yep.jpg?sizes[]=233&sizes[]=566').srcSet"
        )
        .text-overlay
          h1.title
            div(style='text-decoration: underline;') INZICHT, DURF EN VAARDIGHEID
            div VOOR MAATSCHAPPELIJKE IMPACT
          h2.subtitle Trainings- en coachingsbureau voor gedreven professionals
  .jumbotron.jumbotron-fluid
    .container
      p SpringestCustom

  .container-fluid.container-right
    .row
      .col-md
        br
        br
        h1.display-4 Neem je talenten serieus.
        br
      .col-md.full-width
        .float-right
          b-img(
            width=566,
            height=320,
            blank-color="#777",
            src="~/assets/images/Trainers_van_YEP-1.png",
            :srcset="require('~/assets/images/Trainers_van_YEP-1.png?sizes[]=233&sizes[]=566').srcSet"
          )

  .container
    p De drang om te leren.
    p Wij zien het bij zo veel professionals.
    p En we weten hoe graag organisaties daar ruimte voor willen maken.
    p Wij zijn er voor professionals die staan te popelen om hun stem verder te ontdekken en te laten horen. Die een idee hebben over hoe het anders kan en willen weten hoe ze dat binnen hun organisatie waar kunnen maken. Die soms nog aan zichzelf twijfelen en merken dat organisaties complex zijn. Maar die zich razendsnel nieuwe vaardigheden eigen willen maken. Enerzijds om zelf te groeien, anderzijds omdat ze weten dat ze een tastbare bijdrage kunnen leveren aan de organisatie en de samenleving als ze echt ergens voor durven staan.

  .container
    p Yep is hét trainingsbureau voor gedreven professionals.
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

<style lang="scss">
@import "assets/scss/custom.scss";
.container {
  position: relative;
}

.text-overlay {
  position: absolute;
  top: 48px;
  right: 16px;
  background-color: $primary;
  padding: 5px;
}

.text-overlay .title {
  color: $dark;
  font-size: 45px;
}
.text-overlay .subtitle {
  color: $gray-600;
  font-size: 30px;
}

@include media-breakpoint-between(0, lg) {
  .text-overlay .title {
    font-size: 30px;
  }
  .text-overlay .subtitle {
    font-size: 20px;
  }
}

.jumbotron {
  margin-bottom: 0rem;
}

</style>
