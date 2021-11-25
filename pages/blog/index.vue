<template lang="html">
  <div>
    <div class="jumbotron jumbotron-fluid yep-geel">
      <div class="row justify-content-around">
        <h1>Blog</h1>
      </div>
    </div>
    <div class="container mt-4">
      <div v-for="article of articles" :key="article.title">
        <b-card class="mt-2 overflow-hidden shadow-none" no-body="">
          <b-row no-gutters="">
            <b-col md="3">
              <div class="square-img-container" style="margin: 20px">
                <b-card-img class="square-img rounded-circle" :src="require(`~/content/blog/${article.img}?size=500`)" :alt="article.alt"></b-card-img>
              </div>
            </b-col>
            <b-col md="9">
              <b-card-body :title="article.title">
                <b-card-text>
                  <p>{{ article.tags }}</p>
                  <p>{{ article.categories }}</p>
                  <p>{{ article.intro }}</p>
                </b-card-text>
              </b-card-body>
            </b-col>
            <nuxt-link class="stretched-link font-bold" :to="{ name: `blog-slug`, params: { slug: article.slug } }"> </nuxt-link>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog').only(['title', 'slug', 'img', 'alt', 'intro']).sortBy('date', 'desc').limit(100).fetch()
    return {
      articles
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
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
