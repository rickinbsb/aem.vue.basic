<template>
  <p>{{ text }}</p>
</template>
<script>
export default {
  props: {
    text: { type: String, default: 'Edit me!' }
  }
}
</script>
<style lang="scss" scoped>
p {
  font-family: 'Space Mono', monospace;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.035em;
  margin: 0;
  color: #4f4f4f;
  width: 70%;
}
</style>
