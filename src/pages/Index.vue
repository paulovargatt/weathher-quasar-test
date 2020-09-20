<template>
  <q-page class="flex column">
    <div class="col q-pt-lg q-px-md">
      <q-input v-model="search"
               @keyup.enter="getWeatheryBySearch"
               placeholder="Search"
               dark borderless>
        <template v-slot:before>
          <q-icon name="my_location" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:append>
          <q-btn round dense flat icon="search"
          @click="getWeatheryBySearch"
          />
        </template>
      </q-input>
    </div>

    <template v-if="weatherData">
      <div class="col text-white text-center">
        <div class="text-h4 text-weight-light" >{{weatherData.name}}</div>
        <div class="text-h6 text-weight-light" >{{weatherData.weather[0].main}}</div>
        <div class="text-h1 text-weight-light q-my-lg relative-position" >
          <span>{{weatherData.main.temp}}</span>
          <span class="degree relative-position">º</span>
        </div>
      </div>

      <div class="col text-center">
        <img class="img" :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" alt="">
      </div>
    </template>

    <template v-else>
      <div class="col column text-center text-white" >
        <div class="col text-h2 text-weight-thin">
          Weather
        </div>
      </div>
      <q-btn color="white" class="col" flat @click="getLocation">
        <q-icon size="3em" left name="my_location" ></q-icon>
        <div>Localizar</div>
      </q-btn>

      <q-btn color="white" class="col" flat @click="getStore">
        <q-icon size="3em" left name="my_location" ></q-icon>
        <div>STORE</div>
      </q-btn>

      <div class="text-center">
        <h2 class="text-white">{{ statusX }}</h2>
      </div>
    </template>
    <div class="col skyline"></div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      search: '',
      weatherData: null,
      vuex: '',
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
    },
    getStore () {
      this.$store.dispatch('increment', this.$store.state.answer + 1)
    }
  },
  mounted () {
    // this.vuex = this.$store.state.answer
  },
  computed: {
    statusX () {
      return this.$store.state.answer
    }
  }
}
</script>

<style lang="sass">
  .q-page
    background: linear-gradient(to right, #083e1c, #1D976C)
  .degree
    font-size: 0.6em!important
    top: -25px!important
  .skyline
    flex: 0 0 200px
    background: url("../assets/images/patt.png")
    background-size: contain
    background-position: center bottom
  bac
</style>
