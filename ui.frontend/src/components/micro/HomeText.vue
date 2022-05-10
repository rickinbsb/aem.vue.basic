<template>
  <div class="home-text">
    <h1 v-show="text">{{ text }}</h1>
    <h2 v-show="subtext">{{ subtext }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    text: { type: String, default: '' },
    subtext: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
$primary: #c12d18;
$secondary: #222;

.home-text {
  font-family: 'Poppins', sans-serif;
  text-align: right;

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 67px;
    margin: 0;
    color: $primary;
    text-shadow: 2px -2px 10px #ffffff, -2px 2px 10px #ffffff;
  }
  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
    color: $secondary;
  }
}
</style>
