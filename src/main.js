import Vue from 'vue';
import App from './App.vue';
import Vueresource from 'vue-resource';
import VueScrollReveal from 'vue-scroll-reveal';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);
Vue.use(Vueresource);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '50px'
});

Vue.http.options.root = 'https://oizza-793e4.firebaseio.com/';

new Vue({
  render: h => h(App),
}).$mount('#app')
