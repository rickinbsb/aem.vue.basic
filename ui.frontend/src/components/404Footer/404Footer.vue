<template>
  <footer>
    created by <a :href="userurl">{{ username }}</a> - devChallenges.io
  </footer>
</template>
<script>
export default {
  props: {
    username: { type: String, default: 'Edit me!' },
    userurl: { type: String, default: '#' }
  }
}
</script>
<style lang="scss" scoped>
footer {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  color: #bdbdbd;
  margin: 24px 0;

  a {
    font-weight: 700;
    color: unset;
  }
}
</style>
