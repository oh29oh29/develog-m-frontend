import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import PostList from './components/post/List'
import SignIn from './components/member/SignIn'
import SignUp from './components/member/SignUp'
import Admin from './components/admin/Home'
import Category from './components/admin/Category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'list',
          component: PostList
        },
        {
          path: 'sign-in',
          name: 'signIn',
          component: SignIn
        },
        {
          path: 'sign-up',
          name: 'signUp',
          component: SignUp
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'category',
          name: 'category',
          component: Category
        }
      ]
    }
  ]
})
