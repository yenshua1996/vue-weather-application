<template>
  <article class="weather-card">
    <section class="main">
      <div class="main-header">
        <h5 class="main-title">{{ city.name }}</h5>

        <div v-if="city.weather[0].description === 'clear sky'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg"
            alt=""
          />
        </div>

        <div v-if="city.weather[0].description === 'few clouds'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg"
            alt=""
          />
        </div>

        <div
          v-if="city.weather[0].description === 'scattered clouds'"
          class="icon"
        >
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-2.svg"
            alt=""
          />
        </div>

        <div
          v-if="city.weather[0].description === 'broken clouds'"
          class="icon"
        >
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg"
            alt=""
          />
        </div>

        <div v-if="city.weather[0].description === 'shower rain'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-6.svg"
            alt=""
          />
        </div>

        <div v-if="city.weather[0].description === 'rain'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-7.svg"
            alt=""
          />
        </div>

        <div v-if="city.weather[0].description === 'thunderstorm'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/thunder.svg"
            alt=""
          />
        </div>

        <div v-if="city.weather[0].description === 'snow'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/snowy-6.svg"
            alt=""
          />
        </div>

        <div v-if="city.weather[0].description === 'mist'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg"
            alt=""
          />
        </div>

        <div v-if="city.weather[0].description === 'light snow'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/snowy-4.svg"
            alt=""
          />
        </div>

        <div
          v-if="city.weather[0].description === 'overcast clouds'"
          class="icon"
        >
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-2.svg"
            alt=""
          />
        </div>

        <div v-if="city.weather[0].description === 'light rain'" class="icon">
          <img
            src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-6.svg"
            alt=""
          />
        </div>
      </div>

      <div class="main-content">
        <p class="description">
          {{
            city.weather[0].description[0].toUpperCase() +
            city.weather[0].description.slice(1)
          }}
        </p>

        <div class="condition">
          <p class="temperature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-thermometer"
              viewBox="0 0 16 16"
            >
              <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path
                d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z"
              />
            </svg>

            {{ city.main.temp }}
          </p>

          <p class="humidity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-droplet"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
              />
              <path
                fill-rule="evenodd"
                d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
              />
            </svg>

            {{ city.main.humidity }}
          </p>

          <p class="country">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-flag-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"
              />
            </svg>

            {{ city.sys.country }}
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "WeatherCard",

  props: {
    city: Object,
  },
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
  height: 2rem;
  transform: scale(2.2);
}

.weather-card {
  border: 1px solid rgb(231, 231, 231);
  background-color: rgb(251, 251, 251);
  border-radius: 4px;
  padding: 1rem;
  transition: all 200ms linear;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.main-title {
  font-weight: 600;
  font-size: 1.45rem;
}

.description {
  font-weight: 300;
  font-size: 0.925rem;
  margin-bottom: 1rem;
}

.condition {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.temperature,
.humidity,
.country {
  font-weight: 600;
}

.weather-card:hover .bi {
  fill: rgb(0, 200, 255);
}

.weather-card:hover {
  cursor: pointer;
  border: none;
  background-color: rgb(61, 61, 61);
  color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.19), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
