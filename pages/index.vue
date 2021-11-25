<template lang="html">
  <div>
    <div class="container-fluid container-left">
      <div class="row p-0">
        <div class="col-md-6 p-0">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/training-yep.jpg"
            :srcset="require(`~/assets/images/training-yep.jpg?sizes[]=233&amp;sizes[]=566`).srcSet"
          ></b-img>
        </div>
        <div class="col-md-6 pt-4">
          <h2>
            Inzicht, durf en vaardigheid<br />
            <span class="yep-geel-donker">voor maatschappelijke impact</span>
          </h2>
        </div>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid yep-geel">
      <div class="container">
        <h2>
          De drang om te leren. Wij zien het bij zoveel professionals. En we weten hoe graag organisaties daar ruimte voor willen maken. Samen met hen ontwerpen
          we trainings- en coachingstrajecten.
        </h2>
        Wij zijn er voor professionals die geloven dat de maatschappij duurzamer en eerlijker kan zijn en die staan te popelen om hun stem verder te ontdekken.
        Die een idee hebben over hoe het anders kan en willen weten hoe ze dat binnen hun organisatie waar kunnen maken. Die soms nog aan zichzelf twijfelen en
        merken dat organisaties complex zijn. Maar die zich razendsnel nieuwe vaardigheden eigen willen maken. Enerzijds om zelf te groeien, anderzijds omdat ze
        weten dat ze een tastbare bijdrage kunnen leveren aan de organisatie en de samenleving als ze echt ergens voor durven staan.
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid yep-grijs-donker">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md-3 border bg-light p-2 text-center">
            <h2>Uitgelicht</h2>
            <a href="/trainingen/talent-ontwikkelprogramma" class="d-block mt-2">
              <b-img
                fluid="fluid"
                blank-color="#777"
                src="~/assets/images/uitgelicht1.png"
                :srcset="require(`~/assets/images/uitgelicht1.png?sizes[]=200&amp;sizes[]=566`).srcSet"
              ></b-img>
              Talentontwikkel programma>></a
            >
          </div>
          <div class="col-md-5 border bg-light p-2 text-center">
            <h2>Reviews</h2>
            <SpringestCustom />
          </div>
          <div v-for="blog of blogs" :key="blog.title" class="col-md-3 border bg-light p-2 text-center">
            <h2>Recente blog</h2>
            <a href="/blog/welke-rol-pak-jij-als-cursist" class="d-block mt-2">
              <b-img fluid="fluid" blank-color="#777" :src="require(`~/content/blog/${blog.img}?size=500`)" :alt="blog.alt"></b-img>
              {{ blog.title }} >></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid container-right m-0">
      <div class="row">
        <div class="col-md full-width">
          <br /><br />
          <h1 class="yep-geel-donker">Training coaching en advies</h1>
          <h1>Neem je talent en maatschappelijke ambitie serieus.</h1>
          <br />
        </div>
        <div class="col-md p-0">
          <div class="div float-right" style="max-width: 500px; width: 100%">
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
    <div class="jumbotron jumbotron-fluid yep-grijs-donker">
      <div class="container">
        <h1 class="text-center text-light">Opdrachtgevers</h1>
      </div>
    </div>
    <div class="container-fluid p-0">
      <b-img
        fluid="fluid"
        blank-color="#777"
        src="~/assets/images/site-foto-1-of-1-3.jpg"
        :srcset="require(`~/assets/images/site-foto-1-of-1-3.jpg`).srcSet"
      ></b-img>
    </div>
    <div class="jumbotron jumbotron-fluid yep-grijs-donker">
      <div class="container text-light border-top border-bottom">
        <h1 class="text-center my-4">Yep is hét trainingsbureau voor gedreven professionals.</h1>
        <div class="row justify-content-around my-5">
          <div class="col-md-3 text-center">
            <b-img fluid="fluid" blank-color="#777" src="~/assets/images/wereldbol.png" :srcset="require(`~/assets/images/wereldbol.png`).srcSet"></b-img><br />
            <h2 class="mt-2">Maatschappelijk</h2>
            <p>Jouw impact is ons doel.</p>
          </div>
          <div class="col-md-3 text-center">
            <b-img fluid="fluid" blank-color="#777" src="~/assets/images/megafoon.png" :srcset="require(`~/assets/images/megafoon.png`).srcSet"></b-img><br />
            <h2 class="mt-2">Actief</h2>
            <p>Leren door te experimenteren.</p>
          </div>
          <div class="col-md-3 text-center">
            <b-img fluid="fluid" blank-color="#777" src="~/assets/images/puzzle.png" :srcset="require(`~/assets/images/puzzle.png`).srcSet"></b-img><br />
            <h2 class="mt-2">Flexibel</h2>
            <p>Jouw ontwikkelvraag staat centraal.</p>
          </div>
        </div>
        <p class="text-center my-5">
          Voorbeelden van onze trainingen en case studies vind je hier. Op zoek naar coaching voor jezelf of je medewerkers? Lees hier verder>>.
        </p>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid yep-geel">
      <div class="container text-center">
        <h1>Bekijk ons aanbod</h1>
        <div class="row justify-content-around mt-5">
          <div class="col-md-4 bg-light py-2 mb-2 text-center">
            <h2 class="mb-3">Trainingen</h2>
            <a href="trainingen" class="d-block mt-2">
              <b-img
                fluid="fluid"
                blank-color="#777"
                src="~/assets/images/JUMP.jpg"
                :srcset="require(`~/assets/images/JUMP.jpg?sizes[]=233&amp;sizes[]=566`).srcSet"
              ></b-img>
              <p class="mt-2">Lees meer >></p>
            </a>
          </div>
          <div class="col-md-4 bg-light py-2 mb-2 text-center">
            <h2 class="mb-3">Coaching</h2>
            <a href="coaching" class="d-block mt-2">
              <b-img
                fluid="fluid"
                blank-color="#777"
                src="~/assets/images/omgaanmetstress.jpg"
                :srcset="require(`~/assets/images/omgaanmetstress.jpg?sizes[]=233&amp;sizes[]=566`).srcSet"
              ></b-img>
              <p class="mt-2">Lees meer >></p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const blogs = await $content('blog').only(['title', 'slug', 'img', 'alt', 'intro', 'date']).sortBy('date', 'desc').limit(1).fetch()
    return {
      blogs
    }
  }
})
</script>
