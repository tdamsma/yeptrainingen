<template lang="html">
  <div>
    <div class="container mt-3 mb-3 bg-white pt-4">
      <div class="row">
        <div class="col-lg-9">
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
        <div class="col-lg-3">
          <div class="border bg-light p-2 text-center">
            <b-img
              fluid="fluid"
              blank-color="#777"
              src="~/assets/images/omgaanmetstress.jpg"
              :srcset="require(`~/assets/images/blog-overzicht.jpg?sizes[]=233&amp;sizes[]=566`).srcSet"
            ></b-img>
            <a href="/blog/" class="d-block mt-2">&lt;&lt; Terug naar overzicht</a>
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

    const surroundingDocuments = await $content('blog').only(['title', 'slug', 'img', 'alt']).sortBy('createdAt', 'asc').surround(params.slug).fetch()
    return {
      document,
      surroundingDocuments
    }
  },
  head() {
    return {
      title: 'YEP trainingen blog'
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
