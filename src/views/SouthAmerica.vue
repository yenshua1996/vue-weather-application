<template>
  <div>
    <Header title="South America" />
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
        "san paolo",
        "buenos aires",
        "rio de janeiro",
        "lima",
        "bogota",
        "santiago",
      ],
    };
  },
};
</script>
