<template lang="html">
  <div>
    <div class="container">
      <b-carousel
        id="carousel-1"
        :interval="2000"
        controls=""
        indicators=""
        background="#ababab"
        img-width="1024"
        img-height="180"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image-->
        <!-- Slides with img slot-->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment-->
        <b-carousel-slide v-for="responsiveImage of responsiveImages" :key="responsiveImage.src" caption="Training" text="Echt een hele leuke was dit">
          <template #img="">
            <b-img-lazy
              fluid-grow="fluid-grow"
              :src="responsiveImage.src"
              :srcset="responsiveImage.srcSet"
              sizes="50vw"
              :blank-src="responsiveImage.placeholder"
              :blank-width="responsiveImage.width"
              :blank-height="responsiveImage.height"
              alt="alt text voor een plaatje"
            >
            </b-img-lazy>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
const responsiveImages = Array.from(Array(13).keys()).map((n) =>
  require(`~/assets/images/training/training-${n + 1}.jpg?resize&placeholder=true&sizes[]=100,sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048`)
)
export default {
  data() {
    return {
      responsiveImages,
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(_slide) {
      this.sliding = true
    },
    onSlideEnd(_slide) {
      this.sliding = false
    }
  }
}
</script>
