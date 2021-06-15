<template lang="pug">
div
  .jumbotron.jumbotron-fluid
    .container
      h1.display-4 Blog
      p.lead
        | Ons leuke blog
  .container
    div(v-for="article of articles")
      b-card.mt-5.overflow-hidden(no-body='')
        b-row(no-gutters='')
          b-col(md='2')
            .rect-img-container(style='margin: 20px')
              b-card-img.rect-img.rounded-circle(:src="require(`~/content/blog/${article.img}?size=300`)", :alt="article.alt")
          b-col(md='10')
            b-card-body(:title="article.title")
              b-card-text
                p {{article.tags}}
                p {{article.categories}}
                p {{article.intro}}
          nuxt-link.stretched-link.font-bold(
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          )

</template>)
<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'slug', 'img', 'alt', 'intro'])
      .sortBy('date', 'desc')
      .limit(100)
      .fetch()
    return {
      articles
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

<style>
  .rect-img-container {
    position: relative;
  }

  .rect-img-container::after {
    content: "";
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
