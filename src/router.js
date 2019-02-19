import Vue from 'vue';
import Router from 'vue-router';

import MHome from './components/main/Home';
import MPostList from './components/main/post/List';
import MPostDetail from './components/main/post/Detail';
import MSignIn from './components/main/member/SignIn';
import MSignUp from './components/main/member/SignUp';
import MCategory from './components/main/post/Category';

import AHome from './components/admin/Home';
import ACategory from './components/admin/Category';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MHome,
      children: [
        {
            path: '',
            name: 'list',
            components: {
                category: MCategory,
                default: MPostList
            }
        },
        {
          path: 'sign-in',
          name: 'signIn',
          component: MSignIn
        },
          {
          path: 'sign-up',
          name: 'signUp',
          component: MSignUp
        },
        {
          path: ':categoryName',
          name: 'list2',
          components: {
            category: MCategory,
            default: MPostList
          }
        },
        {
          path: ':categoryName/:postTitle',
          name: 'detail',
          components: {
            default: MPostDetail
          }
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AHome,
      children: [
        {
          path: 'category',
          name: 'category',
          component: ACategory
        }
      ]
    }
  ]
})
