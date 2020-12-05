import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import './quasar'
import axios from 'axios'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSimpleAlert from "vue-simple-alert"

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.use(VueSimpleAlert)
// Vue.use(VueGeolocation)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBlrsAMRJQ5A4ajPVGvRgJkTNNWP-YnJMI',
  },
  installComponents: true,
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
