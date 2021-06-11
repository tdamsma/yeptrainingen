<template lang="pug">
div
  .container
    .row
      .col-lg-9
        .container

          img.img-fluid(:src="require(`~/content/blog/${article.img}?size=800`)", :alt="article.alt")
          h2 {{ article.title }}

          p {{ formatDate(article.date) }}

          .blog-details-body
            nuxt-content(:document="article")

      // bar rechts met links
      .col-lg-3
        div(v-for="article of surroundingArticles")
          b-card.mt-5.overflow-hidden(v-if="article" no-body='' bg-variant="dark" text-variant="white")
            b-card-img.rounded-0(:src="require(`~/content/blog/${article.img}?size=255`)", :alt="article.alt")
            b-card-body.p-3
              b-card-title.smalltext {{article.title}}
            nuxt-link.stretched-link.font-bold(
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          )
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    const surroundingArticles = await $content('blog')
      .only(['title', 'slug', 'img', 'alt'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      surroundingArticles
    }
  },
  head () {
    return {
      title: 'YEP trainingen blog'
    }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/custom.scss";
.smalltext {
  font-size: 16px;
}

.nuxt-content > p > img {
  width: 100%;
}
</style>
