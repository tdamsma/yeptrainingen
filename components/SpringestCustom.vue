<template lang="pug">
div
  .container
    b-button(v-b-modal.modal-1="") Meer ervaringen
    transition-group(name="list")
      div(v-for="review of selectedReviews" :key="review.TrainingReview.id")
        b-card.list-item.overflow-hidden(no-body='' style='max-width: 540px;')
          .d-flex.bd-highlight
            .p-2.flex-fill.bd-highlight.align-items
              h1
                b-badge(variant="primary") {{review.TrainingReview.rating}}
          .p-2.flex-fill.bd-highlight
            blockquote.blockquote
              p.mb-2 {{ review.TrainingReview.description }}

  b-modal#modal-1.modal-fullscreen(size="xl")
    template(#modal-header="{ close }")
      // Emulate built in modal header close button action
      b-button(size="sm", @click="close()")
        | Terug
      h5 Springest Reviews
    template(#default="{ hide }")
      //- height: 100%; min-height: 70vh
      iframe.container-fluid(
        style="padding: 0px; height: 100%;",
        src="https://www.springest.nl/yep-trainingen-2?widget=1"
      )

    template(#modal-footer="{ close }")
      // Button with custom close trigger value
      b-button(size="sm", @click="close()")
        | Terug
</template>
<script>
import { jsonp } from 'vue-jsonp'

export default {
  data () {
    return {
      springestData: {},
      t: 0
    }
  },
  computed: {
    reviews () {
      return this.springestData.reviews ? this.springestData.reviews : []
    },
    reviewsDoubled () {
      console.log(this.reviews.concat(this.reviews).length)
      return this.reviews.concat(this.reviews)
    },
    selectedReviews () {
      return this.reviewsDoubled.slice(this.t, this.t + 3).reverse()
    }
  },
  mounted () {
    this.init()
  },
  created () {
    setInterval(() => (this.t = (this.t + 1) % this.reviews.length), 4000)
  },
  methods: {
    async init () {
      const result = await jsonp(
        'http://www.springest.nl/yep-trainingen-2/reviews.jsonp',
        {
          callbackName: 'SpringestReviewWidget'
        }
      )
      this.springestData = result
    }
  }
}
</script>

<style scoped>
.list-move {
  transition: transform 1s;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
