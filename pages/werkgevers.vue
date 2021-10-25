<template lang="html">
  <div>
    <div class="container-fluid container-left">
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
          <div class="text-overlay" style="background-color: #F2F2F2;">
            <h2>
              <div>Inzicht, durf en vaardigheid</div>
              <div style="color:#e8c902;">voor maatschappelijke impact</div>
            </h2>
            
          </div>
        </div>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid yep-geel">
      <div class="container">
        Wij staan paraat voor professionals die geloven dat de maatschappij duurzamer
en eerlijker kan zijn. En die de drang hebben om te leren. Samen met hun
organisaties ontwerpen en verzorgen we trainings- en coachingstrajecten. Zodat
de professionals nog beter worden in wat ze goed kunnen: werken aan
vraagstukken die er toe doen.
        
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid" style="background-color:#585656">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md-3 bg-light p-2 text-center">
            <h2>Reviews</h2>
            <div>
              <div class="springest-review-widget">
                <a href="//www.springest.nl/yep-trainingen-2#ervaringen"></a>
              </div>
              <p>
                <script src="//www.springest.nl/reviewwidget.js" async="" />
              </p>
            </div>
          </div>
          <div class="col-md-3 border bg-light p-2 text-center">
            <h2>Uitgelicht</h2>
            <b-img
              fluid="fluid"
              blank-color="#777"
              src="~/assets/images/uitgelicht1.png"
              :srcset="require(`~/assets/images/uitgelicht1.png?sizes[]=200&amp;sizes[]=566`).srcSet"
            ></b-img>
            <a href="welke-rol-pak-jij-als-cursist" class="d-block mt-2">Talentontwikkel programma>></a>
          </div>
          <div class="col-md-3 border bg-light p-2 text-center">
            <h2>Recente blog</h2>
            <b-img
              fluid="fluid"
              blank-color="#777"
              src="~/assets/images/omgaanmetstress.jpg"
              :srcset="require(`~/content/blog/welke-rol-pak-jij-als-cursist-boodschappen.jpg?sizes[]=200&amp;sizes[]=566`).srcSet"
            ></b-img>
            <a href="welke-rol-pak-jij-als-cursist" class="d-block mt-2">Welke rol pak jij als cursist? >></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid container-right">
      <div class="row">
        <div class="col-md full-width">
          <br /><br />
          <h1 style="color:#e8c902;">[Online] training coaching en advies</h1>
          <h1>Neem je talent en maatschappelijke ambitie serieus.</h1>
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
    <div class="jumbotron jumbotron-fluid" style="background-color:#585656">
      <div class="container">
        <h1 class="text-center text-light">Opdrachtgevers</h1>
      </div>
    </div>
    <div class="container-fluid m-0">
            <b-img
              fluid="fluid"
              blank-color="#777"
              src="~/assets/images/site-foto-1-of-1-3.jpg"
              :srcset="require(`~/assets/images/site-foto-1-of-1-3.jpg`).srcSet"
            ></b-img> 
    </div>
    <div class="jumbotron jumbotron-fluid" style="background-color:#585656">
      <div class="container text-light border-top border-bottom">
        <h1 class="text-center my-4">Yep is hét trainingsbureau voor gedreven professionals.</h1>
         <div class="row justify-content-around my-5">
          <div class="col-md-3 p-2 text-center">
            <h2>Maatschappelijk</h2>
            <p>Jouw impact is ons doel.</p>
          </div>
          <div class="col-md-3 p-2 text-center">
            <h2>Actief</h2>
            <p>Leren door te experimenteren.</p>
          </div>
          <div class="col-md-3 text-center">
            <h2>Flexibel</h2>
             <p>Jouw ontwikkelvraag staat centraal.</p>
          </div>
        </div>
        <p class="text-center my-5">Voorbeelden van onze trainingen en case studies vind je hier. Op zoek naar coaching voor jezelf of je medewerkers? Lees hier verder>>.</p>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container text-center">
        <h1>Bekijk ons aanbod</h1>
        <div class="row justify-content-around mt-5">
          <div class="col-md-4 border bg-light p-2 text-center">
            <h2>Trainingen</h2>
            <b-img
              fluid="fluid"
              blank-color="#777"
              src="~/assets/images/JUMP.jpg"
              :srcset="require(`~/assets/images/JUMP.jpg?sizes[]=233&amp;sizes[]=566`).srcSet"
            ></b-img>
          <a href="trainingsaanbod" class="d-block mt-2">Lees meer >></a>
          </div>
          <div class="col-md-4 border bg-light p-2 text-center">
            <h2>Coaching</h2>
            <b-img
              fluid="fluid"
              blank-color="#777"
              src="~/assets/images/omgaanmetstress.jpg"
              :srcset="require(`~/assets/images/omgaanmetstress.jpg?sizes[]=233&amp;sizes[]=566`).srcSet"
            ></b-img>
            <a href="coaching" class="d-block mt-2">Lees meer >></a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>
