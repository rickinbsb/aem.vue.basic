<template>
  <section id="uol-ball">
    <img :src="path" />
  </section>
</template>
<script>
export default {
  props: {
    path: { type: String, default: '/content/dam/vue/uol-ball-transparent.png' }
  }
}
</script>
<style lang="scss" scoped>
#uol-ball {
  img {
    width: 100%;
    height: 65vh;
    object-fit: cover;
    object-position: right;
  }
}
</style>
