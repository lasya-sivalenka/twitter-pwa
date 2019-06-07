import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import AddTweet from './views/AddTweet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addTweet',
      name: 'addTweet',
      component: AddTweet
    }
  ]
})
