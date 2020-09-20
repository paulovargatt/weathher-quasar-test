<template>
  <q-page class="flex column">
  </q-page>
</template>

<script>
export default {
  name: 'PageAlarms',
  data () {
    return {
      search: '',
      weatherData: null,
      lat: null,
      lon: null,
      apiUrl: 'https://api.openweathermap.org/data/2.5/weather'
    }
  },
  methods: {
    getLocation () {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude
        this.lon = position.coords.longitude
        this.getWeatheryCoords()
      })
    },
    getWeatheryCoords () {
      this.$axios(`${this.apiUrl}?lat=${this.lat}&lon=${this.lon}&appid=e374ff409283b13456dae8bce4b7f592&units=metric`).then((r) => {
        this.weatherData = r.data
      })
    },
    getWeatheryBySearch () {
      this.$axios(`${this.apiUrl}?q=${this.search}&appid=e374ff409283b13456dae8bce4b7f592&units=metric`).then((r) => {
        this.weatherData = r.data
      })
    }
  }
}
</script>

<style lang="scss">
  .q-page{
    background: linear-gradient(to right, #083e1c, #1D976C)
  }
  .degree {
    font-size: 0.6em !important;
    top: -25px !important
  }
</style>
