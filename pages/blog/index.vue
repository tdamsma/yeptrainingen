<template lang="html">
  <div>
    <div class="jumbotron jumbotron-fluid yep-geel">
      <div class="row justify-content-around">
        <h1>Blog</h1>
      </div>
    </div>
    <div class="container mt-4 larger">
      <div v-for="article of articles" :key="article.title">
        <b-card class="mt-2 overflow-hidden shadow-none p-4" no-body="">
          <b-row no-gutters="">
            <b-col lg="3" md="4">
              <div class="square-img-container">
                <b-card-img class="square-img rounded-circle" :src="require(`~/content/blog/${article.img}?size=500`).src" :alt="article.alt"></b-card-img>
              </div>
            </b-col>
            <b-col lg="9" md="8">
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
    const articles = await $content('blog').only(['title', 'slug', 'img', 'alt', 'intro', 'date']).sortBy('date', 'desc').limit(100).fetch()
    return {
      articles
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
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
