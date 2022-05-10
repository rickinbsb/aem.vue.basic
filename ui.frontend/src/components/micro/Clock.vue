<template>
  <section id="clock">
    <h1>{{ time }}</h1>
    <h6>{{ date }}</h6>
  </section>
</template>
<script>
import Moment from 'moment'
export default {
  props: {
    timeFormat: { type: String, required: true },
    dateFormat: { type: String, required: true }
  },
  data () {
    return {
      currentTime: null
    }
  },
  created () {
    Moment.locale('pt_BR')
    this.currentTime = new Moment()
    setInterval(() => {
      this.currentTime = new Moment()
    }, 900)
  },
  computed: {
    time: function () {
      return this.currentTime?.format(this.timeFormat)
    },
    date: function () {
      return this.currentTime?.format(this.dateFormat)
    }
  }
}
</script>
<style lang="scss" scoped>
$primary: #c12d18;
$secondary: #222;

#clock {
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: $secondary;

  h1 {
    font-weight: 700;
    font-size: 144px;
    line-height: 114px;
    margin: 0;
  }

  h6 {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin: 0;
  }
}
</style>
