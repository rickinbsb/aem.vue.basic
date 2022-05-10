<template>
  <section id="brand">
    <a :href="homePath + '.html'"><img :src="imagePath" /></a>
  </section>
</template>
<script>
export default {
  props: {
    imagePath: { type: String, default: '#' },
    homePath: { type: String, default: '#' }
  }
}
</script>
<style lang="scss" scoped>
#brand {
  margin: -6px 0 0 -12px;

  img {
    height: 84px;
  }
}
</style>
