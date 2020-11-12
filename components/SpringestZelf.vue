<template lang="pug">
div
  p Hoi
  p(v-if="$fetchState.pending") Fetching mountains...
  p(v-else-if="$fetchState.error") An error occurred :(
  div(v-else)
    h1 Nuxt Mountains
    ul
      li(v-for="review of reviews") {{ review.TrainingReview }}
    
    button @click="$fetch" Refresh

</template>
<script lang="ts">
export default {
  data() {
    return {
      reviews: [],
    };
  },
  async fetch() {
    this.reviews = await fetch(
      "https://www.springest.nl/yep-trainingen-2/reviews.jsonp"
    ).then((res) => {
      debugger;
      return [1, 2, 3];
    });
  },
};
</script>