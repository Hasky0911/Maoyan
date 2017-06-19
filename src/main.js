// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Index from 'components/index/index'
import FilmInfo from 'components/filminfo/filminfo'
import test from 'components/test'
import scroll from 'vue-scroll'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(scroll)

import axios from "axios"
Vue.prototype.$ajax = axios

const routes = [
  { path: '/', component: Index },
  { path: '/index', component: Index },
  { path: '/filminfo/:id', component: FilmInfo },
  { path: '/test' , component: test }
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
