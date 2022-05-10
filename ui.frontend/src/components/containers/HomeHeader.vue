<template>
  <header>
    <brand-logo :image-path="imagePath" :home-path="homePath" />
    <clock :time-format="timeFormat" :date-format="dateFormat" />
    <weather />
  </header>
</template>
<script>
import BrandLogo from '@/components/micro/BrandLogo'
import Clock from '@/components/micro/Clock'
import Weather from '@/components/micro/Weather'

export default {
  components: {
    BrandLogo,
    Clock,
    Weather
  },
  props: {
    imagePath: { type: String, default: '#' },
    homePath: { type: String, default: '#' },
    timeFormat: { type: String, default: 'HH:mm' },
    dateFormat: { type: String, default: 'dddd, LL' }
  }
}
</script>
<style lang="scss" scoped>
header {
  box-sizing: border-box;
  width: 100%;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: start;
}

@media only screen and (max-width: 975px) {
  header {
    #clock {
      display: none;
    }
  }
}

@media only screen and (max-width: 580px) {
  header {
    padding: 8px 4px;
  }
}

@media only screen and (max-width: 478px) {
  header {
    #weather {
      display: none;
    }
  }
}
</style>
