import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login/Login'
import Home from 'components/home/home'
import Daily from 'components/daily/daily'
import Article from 'components/article/article'
import Classify from 'components/classify/classify'
import About from 'components/about/about'
import ArticleDetail from 'components/articleDetail/articleDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/daily',
          component: Daily
        },
        {
          path: '/article',
          component: Article
        },
        {
          path: '/classify',
          component: Classify
        },
        {
          path: '/about',
          component: About
        },
        {
          path: '/daily/:id',
          component: ArticleDetail
        }
      ]
    }
  ]
})
