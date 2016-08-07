import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from './components/dashboard.vue'
import './assets/styles/base.css'
import 'vux-styles/1px.less'

Vue.use(VueRouter)

let router = new VueRouter()
let App = Vue.extend({})

router.map({
  '/': {
    component: dashboard
  }
})

router.start(App, 'html')
