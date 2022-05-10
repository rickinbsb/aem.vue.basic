<template>
  <div class="button-wrapper">
    <button class="btn" @click="goToHome">{{ text }}</button>
  </div>
</template>
<script>
export default {
  props: {
    text: { type: String, default: 'Edit me!' },
    url: { type: String, default: '#' }
  },
  methods: {
    goToHome () {
      // this.$router.push(this.url + '.html')
      window.location = this.url + '.html'
    }
  }
}
</script>
<style lang="scss" scoped>
button.btn {
  font-family: 'Space Mono', monospace;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  padding: 24px 43px;
  color: #fff;
  background-color: #333;
  transition: background-color 0.2s ease-in, box-shadow 0.1s ease-in-out;

  &:hover {
    background-color: #777;
  }

  &:active {
    box-shadow: inset 0 0 20px -3px #0008;
  }
}
</style>
