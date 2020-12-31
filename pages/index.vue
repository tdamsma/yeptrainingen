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
      .col-md
        h1.display-7 Neem je talenten serieus.
      .col-md.full-width
        .float-right
          b-img(
            width=566,
            height=320,
            blank-color="#777",
            src="~/assets/images/Trainers_van_YEP-1.png",
            :srcset="require('~/assets/images/Trainers_van_YEP-1.png?sizes[]=233&sizes[]=566').srcSet"
          )

  .jumbotron.jumbotron-fluid
    .container
      //- SpringestCustom
  .container
    p Wij doen dit via groepstrainingen, talentprogramma’s en traineeprogramma’s en individuele coaching.
    p Als ambitieuze persoon wil je krachtig in je organisatie staan en een tastbare bijdrage leveren. Je bent niet op zoek naar een trainer die als expert vertelt hoe jij je werk moet doen. Je wilt zelf verschillende aanpakken ervaren en beslissen wat het beste werkt. Je wilt de specifieke uitdagingen die je op dit moment in je werk ervaart zo direct mogelijk terugzien in een training. Ook vind je het belangrijk dat andere deelnemers gedreven en gemotiveerd in de training staan.
    p In onze trainingen ga je actief aan de slag met jouw uitdagingen, op een directe en soms confronterende manier. Wij houden je een spiegel voor, jij boekt samen met andere deelnemers zichtbare resultaten.
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>
