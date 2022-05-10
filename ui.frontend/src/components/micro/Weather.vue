<template>
  <section id="weather">
    <h6 v-show="city">{{ city }}{{ state }} - {{ country }}</h6>
    <img
      v-if="weather && weather.description"
      :src="getIcon(weather)"
      :title="weather.description"
    />
    <h4 v-show="temp">{{ temp }}°</h4>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      city: '',
      state: '',
      country: '',
      temp: '',
      weather: {}
    }
  },
  mounted () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios
          .get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
              lat: position.coords.latitude.toString(),
              lon: position.coords.longitude.toString(),
              appid: '103de2c7d6b22b080dd1844c079b8858',
              units: 'metric',
              lang: 'pt_br'
            }
          })
          .then((response) => {
            this.city = response.data.name
            this.country = response.data.sys.country
            this.temp = response.data.main?.temp.toFixed(1)
            this.weather = response.data.weather?.[0]
            // this.state = ', ' + response.data.sys.state
          })
          .catch((error) => {
            console.error(error.message)
          })
      })
    }
  },
  methods: {
    getIcon (weather) {
      return `https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${weather.icon}.png`
    }
  }
}
</script>
<style lang="scss" scoped>
$primary: #c12d18;
$secondary: #222;

#weather {
  text-align: right;
  font-family: 'Poppins', sans-serif;
  color: $secondary;
  flex-shrink: 0;

  img {
    height: 52px;
    margin: 10px 0;
    float: left;
  }

  h4 {
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    margin: 0;
    display: inline;
  }

  h6 {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 0;
  }
}
</style>
