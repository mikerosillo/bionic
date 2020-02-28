import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoBg from 'vue-videobg'
import SocialSharing from 'vue-social-sharing'

//style
import './assets/style/aplication.scss'
//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('video-bg', VideoBg)

Vue.use(BootstrapVue)
Vue.use(SocialSharing)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
