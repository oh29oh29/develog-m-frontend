import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/member/SignIn'
import SignUp from '@/components/member/SignUp'
import Admin from '@/components/admin/Home'
import Category from '@/components/admin/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'sign-in',
          name: 'SignIn',
          component: SignIn
        },
        {
          path: 'sign-up',
          name: 'SignUp',
          component: SignUp
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'categories',
          name: 'Category',
          component: Category
        }
      ]
    }
  ]
})
