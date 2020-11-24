<template>
  <div class="container">
    <div class="my-5" style="width: 200px">
      Space
    </div>

    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
      <div
        v-for="responsiveImage of responsiveImages.slice(0, 5)"
        :key="responsiveImage.src"
        class="col mb-4"
      >
        <!-- Card -->
        <div class="card h-100 card-cascade wider reverse">
          <!--Card image-->
          <div class="view view-cascade overlay">
            <b-img-lazy
              class="card-img-top"
              fluid-grow
              :src="responsiveImage.src"
              :srcset="responsiveImage.srcSet"
              sizes="50vw"
              :blank-src="responsiveImage.placeholder"
              :blank-width="responsiveImage.width"
              :blank-height="responsiveImage.height"
              alt="alt text voor een plaatje"
            />

            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!--Card content-->
          <div class="card-body card-body-cascade">
            <!--Title-->
            <h4 class="card-title">Card title</h4>
            <!--Text-->
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-light-blue btn-md">
              Read more
            </button>
          </div>
        </div>
        <!-- Card -->
      </div>
    </div>
    <div class="my-5" style="width: 200px">Space</div>
    <div class="row row-cols-1 row-cols-md-3">
      <div
        class="col mb-4"
        v-for="responsiveImage of responsiveImages.slice(4, 8)"
        :key="responsiveImage.src"
      >
        <!-- Card -->
        <div class="card card-cascade narrower">
          <!--Card image-->
          <div class="view view-cascade overlay">
            <b-img-lazy
              class="card-img-top"
              fluid-grow
              :src="responsiveImage.src"
              :srcset="responsiveImage.srcSet"
              sizes="50vw"
              :blank-src="responsiveImage.placeholder"
              :blank-width="responsiveImage.width"
              :blank-height="responsiveImage.height"
              alt="alt text voor een plaatje"
            />

            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!--Card content-->
          <div class="card-body card-body-cascade">
            <!--Title-->
            <h4 class="card-title">Card title</h4>
            <!--Text-->
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-light-blue btn-md">
              Read more
            </button>
          </div>
        </div>
        <!-- Card -->
      </div>
    </div>
    <div class="my-5" style="width: 200px">Space</div>
    <div class="row row-cols-1 row-cols-md-3">
      <div
        class="col mb-4"
        v-for="responsiveImage of responsiveImages.slice(8)"
        :key="responsiveImage.src"
      >
        <!-- Card -->
        <div class="card card-cascade wider">
          <!--Card image-->

          <div class="view view-cascade overlay">
            <b-img-lazy
              class="card-img-top"
              fluid-grow
              :src="responsiveImage.src"
              :srcset="responsiveImage.srcSet"
              sizes="50vw"
              :blank-src="responsiveImage.placeholder"
              :blank-width="responsiveImage.width"
              :blank-height="responsiveImage.height"
              alt="alt text voor een plaatje"
            />
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!--Card content-->
          <div class="card-body card-body-cascade">
            <!--Title-->
            <h4 class="card-title">Card title</h4>
            <!--Text-->
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-light-blue btn-md">
              Read more
            </button>
          </div>
        </div>
        <!-- Card -->
      </div>
    </div>
  </div>
</template>


<script>
const responsiveImages = Array.from(Array(13).keys()).map(
  n => require(`~/assets/images/training/training-${n + 1}.jpg?resize&placeholder=true&sizes[]=100,sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048`)
)
export default {
  data () {
    return {
      responsiveImages
    }
  }
}
</script>

<script>
const responsiveImages = Array.from(Array(13).keys()).map(
  n => require(`~/assets/images/training/training-${n + 1}.jpg?resize&placeholder=true&sizes[]=100,sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048`)
)
export default {
  data () {
    return {
      responsiveImages
    }
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
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
.card.card-image [class*="rgba-"] {
  border-radius: 0.25rem;
}
.card.card-cascade .view.view-cascade {
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
    0 4px 15px 0 rgba(0, 0, 0, 0.15);
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
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
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
  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
    0 4px 15px 0 rgba(0, 0, 0, 0.15);
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
  transition: transform 0.35s ease, opacity 0.35s ease,
    -webkit-transform 0.35s ease;
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
  transition: transform 0.35s ease, opacity 0.35s ease,
    -webkit-transform 0.35s ease;
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
</style>