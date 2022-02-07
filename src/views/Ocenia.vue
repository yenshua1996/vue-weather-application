<template>
  <div>
    <Header title="Ocenia" />
    <Main :cities="cities" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      cities: [
        "sydney",
        "melbourne",
        "wellington",
        "brisbane",
        "honolulu",
        "auckland",
      ],
    };
  },
};
</script>
