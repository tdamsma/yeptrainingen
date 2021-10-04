<template lang="html">
  <div class="jumbotron jumbotron-fluid" style="background-color: #585656">
    <div class="container">
      <div class="row">
        <div class="col-md-3 text-light">
          <h2>Menu</h2>
        </div>
        <div class="col-md-3 text-light">
          <h2 class="mb-4">Gegevens</h2>
          <p>
            Yep Trainingen<br />
            <br />
            <br /><br />
            KvK: 58989463<br />
            BTW: NL001795751B66<br />
            IBAN: NL49TRIO0254729886<br />
          </p>
        </div>
        <div class="col-md-3 text-light">
          <h2>Blog</h2>
        </div>
        <div class="col-md-3 text-light">
          <b-img
            fluid="fluid"
            blank-color="#777"
            src="~/assets/images/Logo-Yep-300x122.png"
            :srcset="require(`~/assets/images/Logo-Yep-300x122.png`).srcSet"
          ></b-img>
          <p>&nbsp;</p>
          Telefoon: 085-7606266
        </div>
      </div>
    </div>
  </div>
</template>
