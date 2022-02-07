<template>
  <div>
    <Header title="North America" />
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
        "new york",
        "vancouver",
        "san francisco",
        "ottawa",
        "los angeles",
        "seattle",
      ],
    };
  },
};
</script>
