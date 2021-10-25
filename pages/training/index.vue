<template lang="html">
  <div class="container" style="margin-top: 30px">
    <div class="row row-cols-1 row-cols-md-3">
      <div v-for="article of articles" :key="article.title" class="col mb-4">
        <!-- Card-->
        <div class="card card-cascade narrower" style="min-height: 400px">
          <!-- Card image-->
          <div class="view view-cascade overlay">
            <div class="container2" style="height: 60%">
              <div class="rect-img-container">
                <b-card-img
                  class="rect-img card-img-top"
                  fluid-grow=""
                  :src="article.responsiveImage.src"
                  :srcset="article.responsiveImage.srcSet"
                  sizes="50vw"
                  :blank-src="article.responsiveImage.placeholder"
                  :blank-width="article.responsiveImage.width"
                  :blank-height="article.responsiveImage.height"
                  :alt="article.alt"
                  ><a href="#!"> <div class="mask rgba-white-slight"></div></a
                ></b-card-img>
              </div>
            </div>
          </div>
          <!-- Card content-->
          <div class="card-body card-body-cascade">
            <!-- Title-->
            <h4 class="card-title">{{ article.title }}</h4>
            <!-- Text-->
            <p class="card-text">{{ article.title }}</p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button class="btn btn-light-blue btn-md">
              Lees meer
              <nuxt-link class="stretched-link font-bold" :to="{ name: 'coaching-slug', params: { slug: article.slug } }"></nuxt-link>
            </button>
          </div>
        </div>
        <!-- Card-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('coaching').only(['title', 'slug', 'img', 'alt', 'intro']).sortBy('date', 'desc').limit(100).fetch()

    return {
      articles: articles.map((a) => {
        a.responsiveImage = require(`~/content/coaching/${a.img}?resize&placeholder=true&sizes[]=100,sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048`)
        return a
      })
    }
  },
  head() {
    return {
      title: 'YEP trainingen coaching'
    }
  }
}
</script>

<style scoped>
.card.card-image {
  width: 100%;
  background-position: center;
  background-size: cover;
}
.card.card-image [class*='rgba-'] {
  border-radius: 0.25rem;
}
.card.card-cascade .view.view-cascade {
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}
.card.card-cascade .view.view-cascade.gradient-card-header {
  padding: 1.6rem 1rem;
  color: #fff;
  text-align: center;
}
.card.card-cascade .view.view-cascade.gradient-card-header .card-header-title {
  font-weight: 500;
}
.card.card-cascade .view.view-cascade.gradient-card-header .btn-floating {
  background-color: rgba(255, 255, 255, 0.2);
}
.card.card-cascade.wider {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.card.card-cascade.wider .view.view-cascade {
  z-index: 2;
}
.card.card-cascade.wider .card-body.card-body-cascade {
  z-index: 1;
  margin-right: 4%;
  margin-left: 4%;
  background: #fff;
  border-radius: 0 0 0.25rem 0.25rem;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.card.card-cascade.wider .card-body.card-body-cascade .card-footer {
  margin-right: -1.25rem;
  margin-left: -1.25rem;
}
.card.card-cascade.wider.reverse .card-body.card-body-cascade {
  z-index: 3;
  margin-top: -1rem;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}
.card.card-cascade.narrower {
  margin-top: 1.25rem;
}
.card.card-cascade.narrower .view.view-cascade {
  margin-top: -1.25rem;
  margin-right: 4%;
  margin-left: 4%;
}
.card .btn-action {
  margin-top: -1.44rem;
  margin-bottom: -1.44rem;
}
.card .activator {
  position: absolute;
  right: 0;
  font-size: 1.2rem;
}
.card .card-reveal {
  position: absolute;
  top: 100%;
  z-index: 1;
  display: none;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.card .card-reveal .content {
  position: relative;
}
.card.ovf-hidden {
  overflow: hidden;
}
.card .card-share {
  position: relative;
}
.card .card-share .social-reveal {
  position: absolute;
  top: -1.44rem;
  right: 1.88rem;
  width: auto;
  opacity: 0;
  -webkit-transition: opacity 0.35s ease, -webkit-transform 0.35s ease;
  transition: opacity 0.35s ease, -webkit-transform 0.35s ease;
  transition: transform 0.35s ease, opacity 0.35s ease;
  transition: transform 0.35s ease, opacity 0.35s ease, -webkit-transform 0.35s ease;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transform: translateX(80px);
  transform: translateX(80px);
}
.card .card-share .social-reveal-active {
  z-index: 11;
  opacity: 1;
  -webkit-transition: opacity 0.35s ease, -webkit-transform 0.35s ease;
  transition: opacity 0.35s ease, -webkit-transform 0.35s ease;
  transition: transform 0.35s ease, opacity 0.35s ease;
  transition: transform 0.35s ease, opacity 0.35s ease, -webkit-transform 0.35s ease;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transform: translateX(-48px);
  transform: translateX(-48px);
}
.card .card-reveal .card-title,
.card-wrapper .card-rotating .card-title {
  cursor: pointer;
}
.card .card-reveal .card-title i,
.card-wrapper .card-rotating .card-title i {
  position: absolute;
  right: 0.63rem;
  color: #9e9e9e;
}
.card-wrapper {
  position: relative;
  width: 100%;
  margin: 0;
  -webkit-perspective: 800px;
  perspective: 800px;
}
.card-wrapper .card-up {
  height: 200px;
  overflow: hidden;
}
.card-wrapper .card-up img {
  vertical-align: middle;
}
.card-wrapper .avatar {
  display: block;
  width: 120px;
  margin-top: -60px;
  overflow: hidden;
}
.card-wrapper .avatar img {
  width: 100%;
  background: none repeat scroll 0 0 #fff;
  border: 5px solid #fff;
}
.card-wrapper .card-rotating {
  height: 100%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.card-wrapper .card-rotating .face {
  position: absolute;
  z-index: 2;
  width: 100%;
  background: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-wrapper .card-rotating.flipped {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.card-wrapper .card-rotating .front {
  z-index: 1;
}
.card-wrapper .card-rotating .back {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.card-wrapper .card-rotating .front,
.card-wrapper .card-rotating .back {
  -webkit-transition: 1s;
  transition: 1s;
}

.rect-img-container {
  position: relative;
}

.rect-img-container::after {
  content: '';
  display: block;
  padding-bottom: 100%;
  margin-bottom: -30%;
}

.rect-img {
  position: absolute;
  width: 100%;
  height: 70%;
  object-fit: cover;
}
</style>
