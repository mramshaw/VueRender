<template>
  <div id="app">
    <Navigation />
    <router-view class="container" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
$primary: #708090;
$secondary: #0000cd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
