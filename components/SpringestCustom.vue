<template lang="pug">
div
  .container(style='height: 300px; overflow: hidden', v-b-modal.modal-1='')
    transition-group(name='review')
      .panel(v-for='review of selectedReviews', :key='review.TrainingReview.id')
        b-card.list-item.overflow-hidden(no-body='')
          .d-flex.bd-highlight
            .p-2.flex-fill.bd-highlight.align-items
              h1
                b-badge(variant='primary') {{ review.TrainingReview.rating }}
          .p-2.flex-fill.bd-highlight
            blockquote.blockquote
              p.mb-1(style='font-size: smaller') {{ review.TrainingReview.description | truncate(200, "...") }}
  b-modal#modal-1.modal-fullscreen(size='xl')
    template(#modal-header='{ close }')
      // Emulate built in modal header close button action
      b-button(size='sm', @click='close()')
        | Terug
      h5 Springest Reviews
    template(#default='{ hide }')
      iframe.container-fluid(style='padding: 0px; height: 400px', src='https://www.springest.nl/yep-trainingen-2?widget=1')
    template(#modal-footer='{ close }')
      // Button with custom close trigger value
      b-button(size='sm', @click='close()')
        | Terug
</template>
<script>
import { jsonp } from 'vue-jsonp'
import Vue from 'vue'

var filter = function (text, length, clamp) {
  clamp = clamp || '...'
  var node = document.createElement('div')
  node.innerHTML = text
  var content = node.textContent
  return content.length > length ? content.slice(0, length) + clamp : content
}

Vue.filter('truncate', filter)

export default {
  data() {
    return {
      springestData: {},
      t: 0
    }
  },
  computed: {
    reviews() {
      return this.springestData.reviews ? this.springestData.reviews : []
    },
    reviewsDoubled() {
      return this.reviews.concat(this.reviews)
    },
    selectedReviews() {
      return this.reviewsDoubled.filter((r) => r.TrainingReview.rating >= 7).slice(this.t, this.t + 3)
    }
  },
  mounted() {
    this.init()
  },
  created() {
    setInterval(() => (this.t = (this.t + 1) % this.reviews.length), 4000)
  },
  methods: {
    async init() {
      const result = await jsonp('https://www.springest.nl/yep-trainingen-2/reviews.jsonp', {
        callbackName: 'SpringestReviewWidget'
      })
      this.springestData = result
    }
  }
}
</script>

<style scoped>
.review-enter,
.review-leave-to {
  opacity: 0;
}

.review-leave-to {
  transform: translateX(300%);
}

.review-leave-active {
  position: absolute;
}
.panel {
  margin: 6px auto;
  overflow: hidden;
  text-align: center;
  transition: all 1s;
  display: inline-block;
  text-align: justify;
  text-justify: inter-word;
}

.review > LI {
  background: green;
}

.review > LI:first-child {
  background: none;
}
</style>
