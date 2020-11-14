<template lang="pug">
div
  .container
    .row
      .col-lg-9
        .container
        
          img.img-fluid(:src="titleImage", :alt="article.alt")
          h2 {{ article.title }}

          p {{ formatDate(article.updatedAt) }}

          .blog-details-body
            nuxt-content(:document="article")

      // bar rechts met links
      .col-lg-3
        div(v-for="article of surroundingArticles")
          b-card.mt-5.overflow-hidden(v-if="article" no-body='' bg-variant="dark" text-variant="white")
            b-card-img.rounded-0(:src="article.img", :alt="article.alt")
            b-card-body.p-3
              b-card-title.smalltext {{article.title}}
            nuxt-link.stretched-link.font-bold(
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          )
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    const surroundingArticles = await $content("blog")
      .only(["title", "slug", "img", "alt"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    const titleImage = require(article.img);
    return {
      article,
      surroundingArticles,
      titleImage,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head() {
    return {
      title: "YEP trainingen blog",
    };
  },
};
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
