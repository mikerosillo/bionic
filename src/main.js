import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoBg from 'vue-videobg'
import SocialSharing from 'vue-social-sharing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//style
import './assets/style/aplication.scss'
//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Add the specific imported icons
library.add(faEnvelope)
library.add(faChevronDown)
library.add(faUser)
library.add(faFacebook)
library.add(faTwitter)
// Enable the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('video-bg', VideoBg)
Vue.use(BootstrapVue)
Vue.use(SocialSharing)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
