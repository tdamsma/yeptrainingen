<template lang="html">
  <div>
    <div class="container">
      <div class="row justify-content-around mb-1">
        <div v-for="member of members" :key="member.name" class="col-md-3 mt-4 py-3 bg-white">
          <img :src="member.responsiveImage.src" :srcSet="member.responsiveImage.srcSet" class="img-fluid" :alt="member.name" :title="member.name" />
          <h2 class="text-center mt-1">{{ member.name }}</h2>
          <nuxt-content :document="member"></nuxt-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const members = await $content('team').only(['name', 'slug', 'body']).sortBy('order').limit(100).fetch()
    return {
      members: members.map((m) => {
        m.responsiveImage = require(`~/content/team/${m.slug}.jpg?resize&placeholder=true&sizes[]=200, sizes[]=300`)
        return m
      })
    }
  }
}
</script>
