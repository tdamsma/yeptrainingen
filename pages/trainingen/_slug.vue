<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="container">
            <div class="text-center mb-4">
              <img class="img-fluid" style="max-height: 800px" :src="require(`~/content/trainingen/${document.img}?size=800`)" :alt="document.alt" />
            </div>
            <h1>{{ document.title }}</h1>
            <div class="blog-details-body">
              <nuxt-content :document="document"></nuxt-content>
            </div>
          </div>
        </div>
        <!-- bar rechts met links-->
        <div class="col-lg-3">
          <div v-for="document of surroundingDocuments" :key="document.title">
            <b-card v-if="document" class="mt-5 overflow-hidden" no-body="" bg-variant="dark" text-variant="white">
              <b-card-img class="rounded-0" :src="require(`~/content/trainingen/${document.img}?size=255`)" :alt="document.alt"></b-card-img>
              <b-card-body class="p-3">
                <b-card-title class="smalltext">{{ document.title }}</b-card-title>
              </b-card-body>
              <nuxt-link class="stretched-link font-bold" :to="{ name: `trainingen-slug`, params: { slug: document.slug } }"></nuxt-link>
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

    const surroundingDocuments = await $content('trainingen').only(['title', 'slug', 'img', 'alt']).sortBy('createdAt', 'asc').surround(params.slug).fetch()
    return {
      document,
      surroundingDocuments
    }
  },
  head() {
    return {
      title: 'Yep trainingsaanbod'
    }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
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
