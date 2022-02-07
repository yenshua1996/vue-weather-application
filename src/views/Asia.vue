<template>
  <div>
    <Header title="Asia" />
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
      cities: ["tokyo", "beijing", "manila", "jakarta", "bangkok", "singapore"],
    };
  },
};
</script>
