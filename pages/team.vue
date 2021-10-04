<template lang="html">
  <div>
    <!-- <div class="container">
      <b-carousel
        id="carousel-1"
        :interval="2000"
        controls=""
        indicators=""
        background="#ababab"
        img-width="1024"
        img-height="180"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      > -->
    <!-- Text slides with image-->
    <!-- Slides with img slot-->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment-->
    <!-- 
        <b-carousel-slide v-for="responsiveImage of responsiveImages" :key="responsiveImage.src" caption="Training" text="Echt een hele leuke was dit">
          <template #img="">
            <b-img-lazy
              fluid-grow="fluid-grow"
              :src="responsiveImage.src"
              :srcset="responsiveImage.srcSet"
              sizes="50vw"
              :blank-src="responsiveImage.placeholder"
              :blank-width="responsiveImage.width"
              :blank-height="responsiveImage.height"
              alt="alt text voor een plaatje"
            >
            </b-img-lazy>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div> -->

    <div class="container">
      <div class="row justify-content-around mb-1">
        <div class="col-md-3 mt-4 py-3 bg-white">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/team/IMG_9763-3-300x300.jpg"
            :srcset="require(`~/assets/images/team/IMG_9763-3-300x300.jpg?sizes[]=200&amp;sizes[]=200`).srcSet"
          >
          </b-img>
          <h2 class="text-center mt-1">Marijn Damsma-Blaisse</h2>
          Ik ben psycholoog-trainer en eigenaar van Yep Trainingen. Het werken als trainer vind ik uitdagend en divers – steeds weer zoeken naar díe context
          waarin een persoon of groep kan ervaren en leren. Ik ben het meest thuis in de onderwerpen communicatie en persoonlijke effectiviteit. Presenteren,
          inzicht in wie je bent en wat je wil bereiken, persoonlijk leiderschap. Ik hou van het bedenken van nieuwe programma’s, originele werkvormen en het
          zorgen voor zo veel mogelijk aansluiting op de praktijk van de deelnemers. Door met andere trainers samen te werken en te sparren blijf ik mezelf als
          trainer ontwikkelen.
        </div>
        <div class="col-md-3 mt-4 py-3 bg-white">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/team/Mascha-zwartwit-300x300.jpg"
            :srcset="require(`~/assets/images/team/Mascha-zwartwit-300x300.jpg?sizes[]=200&amp;sizes[]=200`).srcSet"
          >
          </b-img>
          <h2 class="text-center mt-1">Mascha Lemmers</h2>
          Mensen in beweging brengen, fysiek en metaal, dat is wat mij blij maakt. Met een achtegrond in de bewegings- en organisatiewetenschappen en als
          trainer/adviseur begeleid ik individuen en organisaties bij het vergroten van hun effectiviteit. Dit doe ik door inzicht te geven in het huidige
          gedrag in communicatie, nieuw handelingsrepertoire aan te reiken, veel te oefenen met nieuw gedrag en niet alleen de inhoud, maar vooral de manier
          waarop je de inhoud en jezelf presenteert centraal te stellen. Hierdoor verbeteren je eigen prestaties en de prestaties van de organisatie waarvoor je
          werkt. Actief, open, eerlijk en enthousiast, dat is wat je van mij en mijn werkwijze kunt verwachten.
        </div>
        <div class="col-md-3 mt-4 py-3 bg-white">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/team/AnnaStutje-e1588233110438-300x300.jpg"
            :srcset="require(`~/assets/images/team/AnnaStutje-e1588233110438-300x300.jpg?sizes[]=200&amp;sizes[]=200`).srcSet"
          >
          </b-img>
          <h2 class="text-center mt-1">Anna Stutje</h2>
          Het inspireert me om met mensen te werken die de moed en het doorzettingsvermogen hebben om heel bewust hun eigen pad te zoeken. Ook als ze daarvoor
          spannende besluiten moeten nemen of nieuwe dingen moeten leren. Wat ik het allerliefste doe is zo’n zoektocht van dichtbij begeleiden. Hoe ik dat doe,
          hangt helemaal af van wie ik tegenover me heb. Bij de één breng ik geduld met me mee als iemand behoefte heeft aan tijd en ruimte om een laagje dieper
          te gaan. Bij de ander ben ik veel bezig met oefenen en doen, omdat ik weet dat iemand de neiging heeft om het ‘doen’ uit te stellen. Bij Yep kom je me
          tegen in een rol als coach of als trainer in een intieme trainingssetting.
        </div>
        <div class="col-md-3 mt-4 py-3 bg-white">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/team/Trainer-Myrthe-20161015-1-2-300x300.jpg"
            :srcset="require(`~/assets/images/team/Trainer-Myrthe-20161015-1-2-300x300.jpg?sizes[]=200&amp;sizes[]=200`).srcSet"
          >
          </b-img>
          <h2 class="text-center mt-1">Myrthe Heuser</h2>
          <i>"Tell me and I will forget, show me and I might remember, involve me and I will learn"</i> – Benjamin Franklin. <br />Hier ben ik het helemaal mee
          eens! Wanneer mensen ervaringsgericht leren, zie je als het ware lampjes aangaan. Als trainer streef ik ernaar dat mijn groepen dit in een veilige- en
          prettige leeromgeving kunnen ervaren. Ik vind het heerlijk als mensen nieuw gedrag durven uit te proberen en van elkaar leren in een training. Ik
          draag daar graag aan bij. Ik ben als psycholoog-trainer het meeste thuis in communicatie en persoonlijke effectiviteit. Wat voor eigenschappen mij
          verder omschrijven? Pragmatisch, invoelend, warm, kritisch, en observerend. Ik hoop je met mijn trainingen en coaching in beweging te zetten. Beweging
          tot nadenken, beweging tot nieuw gedrag, en beweging tot groei.
        </div>
      </div>
      <div class="row justify-content-around mb-4">
        <div class="col-md-3 mt-4 py-3 bg-white">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/team/Trainer-Sarah-1-van-1-2-300x300.jpg"
            :srcset="require(`~/assets/images/team/Trainer-Sarah-1-van-1-2-300x300.jpg?sizes[]=200&amp;sizes[]=200`).srcSet"
          >
          </b-img>
          <h2 class="text-center mt-1">Sarah van der Vlerk</h2>
          Ik ben regisseur, trainingsacteur en trainer. Ik vind het belangrijk om inspirerende trainingen te geven, waar je naar buiten loopt met nieuwe ideeën
          en een frisse blik. Maar ik ben ook een praktische trainer, ik geef concrete handvatten waar je mee aan de slag kunt. Ik geloof in een actieve aanpak,
          in mijn trainingen wordt niet veel stilgezeten. Door te doen, te experimenteren en te ervaren leer je mijns inziens meer dan door alleen te luisteren.
        </div>
        <div class="col-md-3 mt-4 py-3 bg-white">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/team/Eline_Hoebe_06.jpg"
            :srcset="require(`~/assets/images/team/Eline_Hoebe_06.jpg?sizes[]=200&amp;sizes[]=200`).srcSet"
          >
          </b-img>
          <h2 class="text-center mt-1">Eline Hoebe</h2>
          Ik geloof sterk in de kracht van ervarend leren. Fietsen leer je immers ook niet door er een boek over te lezen. Als trainingsacteur en trainer laat
          ik je op een speelse manier ervaren wat je eigen invloed kan zijn om het gewenste effect te bereiken in het contact met de ander. Wat mij drijft is om
          het volledige potentieel van een professional naar boven te halen door het ontwikkelen van persoonlijk leiderschap, zodat je zelfbewuster een
          betekenisvolle bijdrage levert aan jezelf, je werkomgeving en de wereld om je heen.
        </div>
        <div class="col-md-3 mt-4 py-3 bg-white">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/team/Rianda.jpg"
            :srcset="require(`~/assets/images/team/Rianda.jpg?sizes[]=200&amp;sizes[]=200`).srcSet"
          >
          </b-img>
          <h2 class="text-center mt-1">Rianda van der Meer</h2>
        </div>
        <div class="col-md-3 mt-4 py-3 bg-white">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/team/sophie-van-oers.jpg"
            :srcset="require(`~/assets/images/team/sophie-van-oers.jpg?sizes[]=200&amp;sizes[]=200`).srcSet"
          >
          </b-img>
          <h2 class="text-center mt-1">Sophie van Oers</h2>
          Wat ik ervaar in de groep en van een individu, benut ik zo veel mogelijk in de training.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const responsiveImages = Array.from(Array(13).keys()).map((n) =>
  require(`~/assets/images/training/training-${n + 1}.jpg?resize&placeholder=true&sizes[]=100,sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048`)
)
export default {
  data() {
    return {
      responsiveImages,
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(_slide) {
      this.sliding = true
    },
    onSlideEnd(_slide) {
      this.sliding = false
    }
  }
}
</script>
