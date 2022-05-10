<template>
  <section id="mission">
    <home-text :text="text1" :subtext="subtext1" />
    <home-text :text="text2" :subtext="subtext2" />
    <home-text :text="text3" :subtext="subtext3" />
    <home-text :text="text4" :subtext="subtext4" />
  </section>
</template>
<script>
import HomeText from '@/components/micro/HomeText'

export default {
  components: {
    HomeText
  },
  props: {
    text1: { type: String, default: '' },
    text2: { type: String, default: '' },
    text3: { type: String, default: '' },
    text4: { type: String, default: '' },
    subtext1: { type: String, default: '' },
    subtext2: { type: String, default: '' },
    subtext3: { type: String, default: '' },
    subtext4: { type: String, default: '' }
  }
}
</script>
<style lang="scss" scoped>
#mission {
  padding: 100px 40px;
  width: 100%;
  z-index: 1;
}
</style>
