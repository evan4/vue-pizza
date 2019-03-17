<template>
  <div id="app">
    <comp-header/>
    <div>
      <compFeatured/>
      <compMenu/>
    </div>
    
    <comp-footer/>
  </div>
</template>

<script>
import compHeader from "./components/header-footer/Header";
import compFooter from "./components/header-footer/Footer";
import compFeatured from "./components/featured";
import compMenu from "./components/Menu";

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured,
    compMenu
  }
}
</script>

<style>
@import url(./assets/css/style.css);
@import url(./assets/css/fonts.css);
</style>
