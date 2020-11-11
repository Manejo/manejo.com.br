import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import './quasar'
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAkTuS-_9iNFrEqta56WDmCZk1ArEahEQo'
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
