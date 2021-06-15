<template lang="pug">
div
  .container
    .row
      .col-lg-9
        .container
          .text-center
            img.img-fluid(style='max-height: 800px;', :src="require(`~/content/blog/${document.img}?size=800`)", :alt="document.alt")
          h2 {{ document.title }}

          p {{ formatDate(document.date) }}

          .blog-details-body
            nuxt-content(:document="document")

      // bar rechts met links
      .col-lg-3
        div(v-for="document of surroundingDocuments")
          b-card.mt-5.overflow-hidden(v-if="document" no-body='' bg-variant="dark" text-variant="white")
            b-card-img.rounded-0(:src="require(`~/content/blog/${document.img}?size=255`)", :alt="document.alt")
            b-card-body.p-3
              b-card-title.smalltext {{document.title}}
            nuxt-link.stretched-link.font-bold(
              :to="{ name: 'blog-slug', params: { slug: document.slug } }"
          )
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const document = await $content('blog', params.slug).fetch()

    const surroundingDocuments = await $content('blog')
      .only(['title', 'slug', 'img', 'alt'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      document,
      surroundingDocuments
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
