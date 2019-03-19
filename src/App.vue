<template>
  <div id="app">
    <comp-header/>
    <div>
      <comp-featured/>
      <comp-menu/>
      <comp-call-us/>
    </div>
    
    <comp-footer/>
  </div>
</template>

<script>
import compHeader from "./components/header-footer/Header";
import compFooter from "./components/header-footer/Footer";
import compFeatured from "./components/featured";
import compMenu from "./components/Menu";
import compCallUs from "./components/CallUs";

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured,
    compMenu,
    compCallUs
  }
}
</script>

<style>
@import url(./assets/css/style.css);
@import url(./assets/css/fonts.css);
</style>
