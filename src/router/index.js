import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/post/List'
import SignIn from '@/components/member/SignIn'
import SignUp from '@/components/member/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: PostList
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
