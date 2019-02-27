import Vue from 'vue';
import Router from 'vue-router';

import MHome from './components/main/Home';
import MIntro from './components/main/Intro';
import MSignIn from './components/main/member/SignIn';
import MSignUp from './components/main/member/SignUp';
import MCategory from './components/main/post/Category';
import MPostList from './components/main/post/List';
import MPostDetail from './components/main/post/Detail';

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
          name: 'intro',
          components: {
            category: MCategory,
            default: MIntro
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
          path: ':categoryName/:page',
          name: 'list2',
          components: {
            category: MCategory,
            default: MPostList
          }
        },
        {
          path: ':categoryName/:page/:postTitle',
          name: 'detail',
          component: MPostDetail
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
