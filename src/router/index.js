import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login/Login'
import Index from 'components/index/index'
import Home from 'components/home/home'
import Bet from 'components/bet/bet'
import Record from 'components/record/record'
import Contact from 'components/contact/contact'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/bet',
          component: Bet
        },
        {
          path: '/record',
          component: Record
        },
        {
          path: '/contact',
          component: Contact
        }
      ]
    }
  ]
})
