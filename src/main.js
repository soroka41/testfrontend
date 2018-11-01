import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Notifications from 'vue-notification'


Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://servertest.loc'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'


Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper)
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
