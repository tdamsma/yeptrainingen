<template lang="pug">
div
  .overflow-container
    h1.text-center.text-light Opdrachtgevers
      transition-group.flexcontainer(name='opdrachtgevers')
        .panel(v-for='opdrachtgever of selectedOpdrachtgevers', :key='opdrachtgever.slug')
          img(:src='require(`~/content/opdrachtgevers/${opdrachtgever.slug}.png?size=200`).src', :alt='opdrachtgever.opdrachtgever')
</template>
<script>
export default {
  data() {
    return {
      opdrachtgevers: [],
      t: 0
    }
  },
  async fetch() {
    // console.log('fetching', this.opdrachtgevers)
    this.opdrachtgevers = await this.$content('opdrachtgevers').only(['slug', 'opdrachtgever', 'url']).fetch()
    // console.log(this.opdrachtgevers)
  },
  computed: {
    opdrachtgeversDoubled() {
      return this.opdrachtgevers.concat(this.opdrachtgevers)
    },
    selectedOpdrachtgevers() {
      return this.opdrachtgeversDoubled.slice(this.t, this.t + 10)
    }
  },
  created() {
    setInterval(() => (this.t = (this.t + 1) % this.opdrachtgevers.length), 3000)
  }
}
</script>

<style scoped>
.overflow-container {
  overflow: hidden;
  width: 100%;
}
.flexcontainer {
  min-width: 1800px;
  margin-left: -200px;
  margin-right: -400px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: flex-start;
}

.opdrachtgevers-enter,
.opdrachtgevers-leave-to {
  opacity: 0;
}

.opdrachtgevers-leave-to {
  transform: translateX(-100%);
}

.opdrachtgevers-leave-active {
  position: absolute;
}
.panel {
  width: 200px;
  padding: 0px;
  margin: 0px auto;
  overflow: hidden;
  text-align: center;
  transition: all 3s linear;
  display: inline-block;
  text-align: justify;
  text-justify: inter-word;
}
</style>
