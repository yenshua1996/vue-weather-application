<template>
  <div class="weather-data">
    <div v-for="{ value } in weatherData" :key="value.id">
      <WeatherCard :city="value" />
    </div>
  </div>
</template>

<script>
import fetchCities from "../../utility/fetchCities.js";
import WeatherCard from "../components/WeatherCard.vue";

export default {
  name: "Main",

  components: {
    WeatherCard,
  },

  props: {
    cities: Array,
  },

  data() {
    return {
      weatherData: [],
    };
  },

  async created() {
    this.weatherData = await fetchCities(this.cities);
  },
};
</script>

<style scoped>
.weather-data {
  padding: 1.5rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
