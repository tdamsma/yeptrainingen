<template lang="html">
  <div class="jumbotron jumbotron-fluid" style="background-color: #807d7d">
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-light">
          <h2>Site-map</h2>
          <div class="row">
            <div class="col-sm-6">
              > <a href="/" class="link-geel">Yep</a><br />
              > <a href="/team" class="link-geel">Ons team</a><br />
              > <a href="/trainingen" class="link-geel">Trainingen</a><br />
              > <a href="/coaching" class="link-geel">Coaching</a><br />
              > <a href="/werkgevers" class="link-geel">Voor werkgevers</a><br />
            </div>
            <div class="col-sm-6">
              > <a href="/blog" class="link-geel">Blog</a><br />
              > <a href="/tarieven" class="link-geel">Tarieven</a><br />
              > <a href="/klachten" class="link-geel">Klachten</a><br />
              > <a href="/contact" class="link-geel">Contact</a><br />
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3 text-light">
          <h2 class="mb-4">Gegevens</h2>
          <p>
            Yep Trainingen<br />
            Koningin Wilhelminalaan 84<br />
            2274 AL Voorburg<br /><br />
            KvK: 58989463<br />
            BTW: NL001795751B66<br />
            IBAN: NL49TRIO0254729886<br />
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3 text-light">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/Logo-Yep-300x122.png"
            :srcset="require(`~/assets/images/Logo-Yep-300x122.png`).srcSet"
          ></b-img>
          <p></p>
          <a href="mailto:info@yeptrainingen.nl" target="_blank">
            <b-img fluid="fluid" blank-color="#777" src="~/assets/images/email.png" :srcset="require(`~/assets/images/Logo-Yep-300x122.png`).srcSet"></b-img>
          </a>
          <a href="https://www.facebook.com/Yeptrainingen" target="_blank">
            <b-img fluid="fluid" blank-color="#777" src="~/assets/images/facebook.png" :srcset="require(`~/assets/images/facebook.png`).srcSet"></b-img>
          </a>
          <a href="https://twitter.com/yeptrainingen" target="_blank">
            <b-img fluid="fluid" blank-color="#777" src="~/assets/images/twitter.png" :srcset="require(`~/assets/images/twitter.png`).srcSet"></b-img>
          </a>
          <a href="https://www.linkedin.com/company/marijn-blaisse-trainingen" target="_blank">
            <b-img fluid="fluid" blank-color="#777" src="~/assets/images/linkedin.png" :srcset="require(`~/assets/images/linkedin.png`).srcSet"></b-img>
          </a>
          <p></p>
          Telefoon: 06-14477347
        </div>
      </div>
    </div>
  </div>
</template>
