<template lang="pug">
div
  b-img-lazy(
    v-for="responsiveImage of responsiveImages"
    :key="responsiveImage.src"
    fluid-grow
    :src="responsiveImage.src"
    :srcset="responsiveImage.srcSet"
    sizes='50vw'
    :blank-src="responsiveImage.placeholder"
    :blank-width="responsiveImage.width"
    :blank-height="responsiveImage.height"
  )
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
