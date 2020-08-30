import Vue from 'vue'
import App from './components/home-page/home-page.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
export const dashboardEventBus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})
