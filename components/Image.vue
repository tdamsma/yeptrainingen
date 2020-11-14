<template>
  <div>
    <!-- single image -->
    <img :src="oneSize.src" />

    <!-- source set with multiple sizes -->
    <img :srcSet="multipleSizes.srcSet" :src="multipleSizes.src" />
  </div>
</template>

<script>
const oneSize = require("~/assets/my-image.jpg?resize&size=300");
const multipleSizes = require("~/assets/my-image.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000");

export default {
  data() {
    return { oneSize, multipleSizes };
  },
};
</script>
