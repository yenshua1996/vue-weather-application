<template>
  <div>
    <Header title="Europe" />
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
      cities: ["paris", "london", "madrid", "berlin", "rome", "moscow"],
    };
  },
};
</script>
