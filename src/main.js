// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './store'

import App from './App'
import Subscribe from './components/Subscribe'
import Detail from './components/Detail'
import 'bootstrap/dist/css/bootstrap.css'

import ElementUI from 'element-ui'
import VueHighcharts from 'vue-highcharts'
import Highcharts from 'highcharts'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueHighcharts);

const routes = [{
  path: '/',
  component: Subscribe
}, {
  path: '/subscribe',
  component: Subscribe
}, {
  path: '/detail/:matchId',
  name: 'detail',
  component: Detail
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
