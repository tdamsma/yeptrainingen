<template lang="html">
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Blog</h1>
        <p class="lead">Ons leuke blog</p>
      </div>
    </div>
    <div class="container">
      <div v-for="article of articles" :key="article.title">
        <b-card class="mt-5 overflow-hidden" no-body="">
          <b-row no-gutters="">
            <b-col md="2">
              <div class="rect-img-container" style="margin: 20px">
                <b-card-img class="rect-img rounded-circle" :src="require(`~/content/blog/${article.img}?size=500`)" :alt="article.alt"></b-card-img>
              </div>
            </b-col>
            <b-col md="10">
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
)
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

<style>
.rect-img-container {
  position: relative;
}

.rect-img-container::after {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.rect-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
