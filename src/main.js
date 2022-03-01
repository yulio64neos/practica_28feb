import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
//import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(Vuelidate)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
