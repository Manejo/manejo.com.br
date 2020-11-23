import Vue from 'vue'
import App from './App'
import router from './router/routes'
import './quasar'
import VueGeolocation from 'vue-browser-geolocation'
import axios from 'axios'
import VueSimpleAlert from "vue-simple-alert"

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.use(VueSimpleAlert)

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
