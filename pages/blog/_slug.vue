<template lang="pug">
div
  .container
    .row
      .col-lg-8
        img.img-fluid(:src="article.img", :alt="article.alt")
        h2 {{ article.title }}

        p {{ formatDate(article.updatedAt) }}

        .blog-details-body
          nuxt-content(:document="article")
      .col-lg-4
        nuxt-link.font-bold(
          v-if="next",
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        ) {{ next.title }}
        nuxt-link.font-bold(
          v-if="prev",
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        ) {{ prev.title }}
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
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
