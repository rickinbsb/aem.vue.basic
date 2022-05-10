<template>
  <article>
    <uol-ball />
    <mission
      :text1="text1"
      :subtext1="subtext1"
      :text2="text2"
      :subtext2="subtext2"
      :text3="text3"
      :subtext3="subtext3"
      :text4="text4"
      :subtext4="subtext4"
    />
  </article>
</template>
<script>
import Mission from '@/components/micro/Mission'
import UolBall from '@/components/micro/UolBall.vue'

export default {
  components: {
    Mission,
    UolBall
  },
  props: {
    text1: { type: String, default: 'edit me!' },
    subtext1: { type: String, default: 'me edita!' },
    text2: { type: String, default: 'edit me!' },
    subtext2: { type: String, default: 'me edita!' },
    text3: { type: String, default: 'edit me!' },
    subtext3: { type: String, default: 'me edita!' },
    text4: { type: String, default: 'edit me!' },
    subtext4: { type: String, default: 'me edita!' }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

article {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #uol-ball {
    max-width: 95vw;
    align-self: flex-end;
    position: absolute;
  }
}

@media only screen and (max-width: 1280px) {
  article {
    #mission {
      display: none;
    }
  }
}
</style>
