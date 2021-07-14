<template lang="html">
  <div>
    <div class="jumbotron jumbotron-fluid yep-geel">
      <div class="container">
        <h1 class="display-4">Benieuwd naar het digitale aanbod van Yep?</h1>
        <p>
          Doordat fysieke trainingen in deze tijd niet altijd wenselijk zijn,
          <a href="https://yeptrainingen.nl/trainingsaanbod/">begeleiden wij je ook graag digitaal!</a>
        </p>
      </div>
    </div>
    <div class="container-fluid container-right">
      <div class="row">
        <div class="container">
          <div class="div" style="float: left; max-width: 600px; width: 100%">
            <b-img
              fluid="fluid"
              blank-color="#777"
              src="~/assets/images/training-yep.jpg"
              :srcset="require(`~/assets/images/training-yep.jpg?sizes[]=233&amp;sizes[]=566`).srcSet"
            ></b-img>
          </div>
          <div class="text-overlay yep-geel">
            <h1 class="title">
              <div style="text-decoration: underline">INZICHT, DURF EN VAARDIGHEID</div>
              <div>VOOR MAATSCHAPPELIJKE IMPACT</div>
            </h1>
            <h2 class="subtitle">Trainings- en coachingsbureau voor gedreven professionals</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid yep-geel">
      <div class="container"></div>
    </div>
    <div class="container-fluid container-right">
      <div class="row">
        <div class="col-md full-width">
          <br /><br />
          <h1 class="display-4">Neem je talenten serieus.</h1>
          <br />
        </div>
        <div class="col-md">
          <div class="div" style="float: right; max-width: 500px; width: 100%">
            <b-img
              fluid="fluid"
              blank-color="#777"
              src="~/assets/images/Trainers_van_YEP-1.png"
              :srcset="require(`~/assets/images/Trainers_van_YEP-1.png?sizes[]=233&amp;sizes[]=566`).srcSet"
            ></b-img>
          </div>
        </div>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid yep-geel">
      <div class="container">
        <h2>De drang om te leren.</h2>
        <h2>Wij zien het bij zo veel professionals.</h2>
        <h2>En we weten hoe graag organisaties daar ruimte voor willen maken.</h2>
        <p>
          Wij zijn er voor professionals die staan te popelen om hun stem verder te ontdekken en te laten horen. Die een idee hebben over hoe het anders kan en
          willen weten hoe ze dat binnen hun organisatie waar kunnen maken. Die soms nog aan zichzelf twijfelen en merken dat organisaties complex zijn. Maar
          die zich razendsnel nieuwe vaardigheden eigen willen maken. Enerzijds om zelf te groeien, anderzijds omdat ze weten dat ze een tastbare bijdrage
          kunnen leveren aan de organisatie en de samenleving als ze echt ergens voor durven staan.
        </p>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1>Yep is hét trainingsbureau voor gedreven professionals.</h1>
        <h2>Krachtig</h2>
        <p>In korte tijd zichtbaar effectief.</p>
        <h2>Actief</h2>
        <p>Leren door te experimenteren.</p>
        <h2>Flexibel</h2>

        <p>Jouw ontwikkelvraag staat centraal.</p>
        <p>Voorbeelden van onze trainingen en case studies vind je hier. Op zoek naar coaching voor jezelf of je medewerkers? Lees hier verder.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>
