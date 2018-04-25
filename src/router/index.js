import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArticleList from '@/pages/List'
import ArticleShow from '@/pages/articles/index'
import User from '@/user/index'
import Follower from '@/user/myFollower'
import Followed from '@/user/myFollowee'
import Friend from '@/user/friend'
import Message from '@/user/message'



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
      path: '/user/:id',
      name: 'User',
      component: User,
    },
    {
      path: '/follower',
      name: 'Follower',
      component: Follower,
    },
    {
      path: '/followee',
      name: 'Followee',
      component: Followed,
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
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
