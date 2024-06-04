import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import LandingPage4 from './views/landing-page4'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'LandingPage4',
      path: '/',
      component: LandingPage4,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
