<template>
  <div>
    <Header title="Africa" />
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
        "kinshasa",
        "lagos",
        "cairo",
        "johannesburg",
        "luanda",
        "casablanca",
      ],
    };
  },
};
</script>
