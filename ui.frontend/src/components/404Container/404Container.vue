<template>
  <div class="container">
    <section id="image">
      <img :src="path" />
    </section>
    <section id="text">
      <not-found-title :title="title" />
      <not-found-text :text="text" />
      <not-found-button :text="button" :url="buttonUrl" />
    </section>
  </div>
</template>
<script>
import NotFoundTitle from '@/components/404Title/404Title'
import NotFoundText from '@/components/404Text/404Text'
import NotFoundButton from '@/components/404Button/404Button'

export default {
  components: {
    NotFoundTitle,
    NotFoundText,
    NotFoundButton
  },
  props: {
    path: { type: String, default: '' },
    title: { type: String, default: '' },
    text: { type: String, default: '' },
    button: { type: String, default: '' },
    buttonUrl: { type: String, default: '' }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

.container {
  display: flex;
  justify-content: space-between;
  // min-height: 80vh;
  min-height: 768px; /* contornando bug do AEM */

  section {
    box-sizing: border-box;
    margin: 0 77px;
    display: flex;
    width: 40vw;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 40px;

    img {
      width: 34vw;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    section {
      margin: 0;
      width: 48vw;

      img {
        width: 100%;
      }

      p {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .container {
    section {
      h1 {
        font-size: 3rem;
        line-height: 71.09px;
      }

      p {
        font-size: 1.125rem;
        line-height: 26.66px;
      }
    }
  }
}

@media only screen and (max-width: 580px) {
  .container {
    flex-direction: column;
    justify-content: space-between;

    section {
      width: 100%;

      &#image {
        padding: 0 44px;
      }

      &#text {
        padding: 0 24px;

        p {
          max-width: 353px;
        }
      }
    }
  }
}
</style>
