<template>
  <header>{{ text }}</header>
</template>
<script>
export default {
  props: {
    text: { type: String, default: 'Edit me!' }
  }
}
</script>
<style lang="scss" scoped>
header {
  font-family: 'Inconsolata', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #333;
  margin: 40px 77px;
}

@media only screen and (max-width: 580px) {
  header {
    margin: 20px 24px;
  }
}
</style>
