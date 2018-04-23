import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArticleList from '@/pages/List'
import ArticleShow from '@/pages/articles/index'
import ArticleEdit from '@/pages/articles/edit'

import signUp from '@/pages/signUp'
import signIn from '@/pages/signIn'
import ArticleCreate from '@/pages/articles/create'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/article',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUp
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
 },{
  path: '/articles/create',
  name: 'ArticleCreate',
  component: ArticleCreate,
  meta: {
    needLogin: true
  }
 },
 {
  path: '/articles/:id',
  name: 'ArticleShow',
  component: ArticleShow,
}, {
  path: '/article/:id/edit',
  name: 'ArticleEdit',
  component: ArticleEdit,
  meta: {
   needLogin: true
  }
}
  ]
})
