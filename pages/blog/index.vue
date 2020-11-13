<template lang="pug">
div
  .jumbotron.jumbotron-fluid
    .container
      h1.display-4 Blog
      p.lead
        | Ons leuke blog
  .container
    div(v-for="article of articles")
      b-card.overflow-hidden(no-body='')
        b-row(no-gutters='')
          b-col(md='4')
            b-card-img.rounded-0(:src="article.img", :alt="article.alt")
          b-col(md='8')
            b-card-body(:title="article.title")
              b-card-text {{article.intro}}
          nuxt-link.stretched-link.font-bold(
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          )

</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'slug', 'img', 'alt', 'intro'])
      .sortBy('createdAt', 'asc')
      .limit(100)
      .fetch()

    return {
      articles
    }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head () {
    return {
      title: 'YEP trainingen blog'
    }
  }
}
</script>

<style>
</style>
