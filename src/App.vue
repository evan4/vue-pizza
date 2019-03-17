<template>
  <div id="app">
    <comp-header/>
    <div>
      <compFeatured/>
    </div>
    
    <comp-footer/>
  </div>
</template>

<script>
import compHeader from "./components/header-footer/Header";
import compFooter from "./components/header-footer/Footer";
import compFeatured from "./components/featured";

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured 
  }
}
</script>

<style>
@import url(./assets/css/style.css);
@import url(./assets/css/fonts.css);
</style>
