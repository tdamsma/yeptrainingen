<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="container">
            <div class="text-center mb-4">
              <img class="img-fluid" style="max-height: 800px" :src="require(`~/content/coaching/${document.img}?size=800`).src" :alt="document.alt" />
            </div>
            <h2>{{ document.title }}</h2>
            <div class="blog-details-body">
              <nuxt-content :document="document"></nuxt-content>
            </div>
          </div>
        </div>
        <!-- bar rechts met links-->
        <div class="col-lg-3">
          <div v-for="surroundingDocument of surroundingDocuments" :key="surroundingDocument.title">
            <b-card class="mt-5 overflow-hidden" no-body="" bg-variant="dark" text-variant="white">
              <b-card-img
                class="rounded-0"
                :src="require(`~/content/coaching/${surroundingDocument.img}?size=255`).src"
                :alt="surroundingDocument.alt"
              ></b-card-img>
              <b-card-body class="p-3">
                <b-card-title class="smalltext">{{ surroundingDocument.title }}</b-card-title>
              </b-card-body>
              <nuxt-link class="stretched-link font-bold" :to="{ name: `coaching-slug`, params: { slug: surroundingDocument.slug } }"></nuxt-link>
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
    const document = await $content('coaching', params.slug).fetch()

    const surroundingDocuments2 = await $content('coaching').only(['title', 'slug', 'img', 'alt']).sortBy('date', 'desc').fetch()
    const surroundingDocuments = surroundingDocuments2
      .filter((x) => x)
      .slice(0, 5)
      .filter((x) => x.title !== document.title)
    return {
      document,
      surroundingDocuments
    }
  },
  head() {
    return {
      title: 'YEP trainingen coaching'
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/custom.scss';
.smalltext {
  font-size: 16px;
}

.nuxt-content > p > img {
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
