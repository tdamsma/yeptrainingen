<template lang="html">
  <div>
    <div class="container mt-3 mb-3 bg-white pt-4">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-12">
          <div class="container">
            <div class="text-center mb-4">
              <img class="img-fluid" style="max-height: 300px" :src="require(`~/content/blog/${document.img}?size=800`)" :alt="document.alt" />
            </div>
            <h2>{{ document.title }}</h2>
            <p>{{ formatDate(document.date) }}</p>
            <div class="blog-details-body">
              <nuxt-content :document="document"></nuxt-content>
            </div>
          </div>
        </div>
        <!-- bar rechts met links-->
        <div class="col-lg-3 col-md-4 col-sm-5">
          <div v-for="surroundingDocument of surroundingDocuments" :key="surroundingDocument.title">
            <b-card class="mt-5 overflow-hidden" no-body="" bg-variant="dark" text-variant="white">
              <b-card-img
                class="rounded-0"
                :src="require(`~/content/blog/${surroundingDocument.img}?size=255`).src"
                :alt="surroundingDocument.alt"
              ></b-card-img>
              <b-card-body class="p-3">
                <b-card-title class="smalltext">{{ surroundingDocument.title }}</b-card-title>
              </b-card-body>
              <nuxt-link class="stretched-link font-bold" :to="{ name: `blog-slug`, params: { slug: surroundingDocument.slug } }"></nuxt-link>
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
    const document = await $content('blog', params.slug).fetch()
    const surroundingDocuments = (
      await $content('blog').only(['title', 'slug', 'img', 'alt']).sortBy('createdAt', 'asc').surround(params.slug, { before: 1, after: 4 }).fetch()
    ).filter((doc) => doc !== null)

    return {
      document,
      surroundingDocuments
    }
  },
  head() {
    return {
      title: 'Yep Trainingen'
    }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('nl-NL', options)
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
  margin-top: 20px;
}
</style>
