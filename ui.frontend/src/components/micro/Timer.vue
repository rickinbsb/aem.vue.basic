<template>
  <section id="timer">
    <p>{{ keepAliveTxt }}</p>
    <span class="separator"></span>
    <h6>{{ refreshInTxt }}</h6>
    <div class="counter">
      {{ timer ? timer : '--' }}
      <h6>seconds</h6>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    keepAliveTxt: { type: String, default: '' },
    refreshInTxt: { type: String, default: '' },
    timer: { type: Number, default: 1 }
  }
}
</script>

<style lang="scss" scoped>
$primary: #c12d18;
$secondary: #fff;

#timer {
  color: $secondary;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  display: flex;
  gap: 35px;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    max-width: 530px;
    margin: 0;
  }

  .separator {
    height: 60px;
    border-right: 1px solid $secondary;
    margin-right: 11vw;
  }

  h6 {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    max-width: 80px;
    margin: 0;
    text-align: right;
  }

  .counter {
    font-weight: 700;
    font-size: 48px;
    line-height: 51px;
    text-align: center;
    width: 94px;

    h6 {
      max-width: unset;
      text-align: center;
    }
  }
}

@media only screen and (max-width: 1280px) {
  #timer {
    gap: unset;
    justify-content: space-evenly;
    .separator {
      margin-right: 0;
    }
  }
}

@media only screen and (max-width: 1048px) {
  #timer {
    justify-content: center;

    p {
      padding: 0 15px;
    }

    .separator,
    .counter,
    h6 {
      display: none;
    }
  }
}
</style>
