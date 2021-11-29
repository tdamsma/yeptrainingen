<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="container">
            <div class="text-center mb-4">
              <img class="img-fluid" style="max-height: 800px" :src="require(`~/content/trainingen/${document.img}?size=800`).src" :alt="document.alt" />
            </div>
            <h1>{{ document.title }}</h1>
            <div class="blog-details-body">
              <nuxt-content :document="document"></nuxt-content>
            </div>
            <div v-if="document.springest" class="mb-4 text-center">
              <button
                v-b-tooltip.hover.bottomleft
                title="Via Springest"
                class="btn btn-primary"
                :onclick="`window.open('${document.springest}/inschrijven?widget=1');`"
              >
                Inschrijfmogelijkheden
              </button>
              <button v-b-tooltip.hover.bottomright title="Via Springest" class="btn btn-primary" :onclick="`window.open('${document.springest}#ervaringen');`">
                Meer Ervaringen
              </button>
            </div>
          </div>
        </div>
        <!-- bar rechts met links-->
        <div class="col-lg-3">
          <div v-for="surroundingDocument of surroundingDocuments" :key="surroundingDocument.title">
            <b-card class="mt-5 overflow-hidden" no-body="" bg-variant="dark" text-variant="white">
              <b-card-img
                class="rounded-0"
                :src="require(`~/content/trainingen/${surroundingDocument.img}?size=255`).src"
                :alt="surroundingDocument.alt"
              ></b-card-img>
              <b-card-body class="p-3">
                <b-card-title class="smalltext">{{ surroundingDocument.title }}</b-card-title>
              </b-card-body>
              <nuxt-link class="stretched-link font-bold" :to="{ name: `trainingen-slug`, params: { slug: surroundingDocument.slug } }"></nuxt-link>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const document = await $content('trainingen', params.slug).fetch()

    const surroundingDocuments2 = await $content('trainingen')
      .surround(params.slug, { before: 5, after: 5 })
      .only(['title', 'slug', 'img', 'alt'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const surroundingDocuments = surroundingDocuments2.filter((x) => x).slice(0, 5)
    return {
      document,
      surroundingDocuments
    }
  },
  head() {
    return {
      title: 'Yep trainingen'
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/custom.scss';
.smalltext {
  font-size: 16px;
}

.nuxt-content img {
  max-height: 500px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  -webkit-filter: drop-shadow(5px 5px 5px #999);
  filter: drop-shadow(5px 5px 5px #999);
  margin-bottom: 20px;
}
</style>
