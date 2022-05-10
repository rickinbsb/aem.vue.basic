<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  props: {
    title: { type: String, default: 'Edit me!' }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-family: 'Space Mono', monospace;
  font-size: 4rem;
  font-weight: 700;
  line-height: 95px;
  letter-spacing: -0.035em;
  margin: 0;
  color: #333;
}
</style>
