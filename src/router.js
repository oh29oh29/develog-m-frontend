import Vue from 'vue';
import Router from 'vue-router';

import MHome from './components/main/Home';
import MIntro from './components/main/Intro';
import MSignIn from './components/main/member/SignIn';
import MSignUp from './components/main/member/SignUp';
import MProfile from './components/main/member/Profile';
import MPasswordChange from './components/main/member/PasswordChange';
import MFindAccount from './components/main/member/FindAccount';
import MCategory from './components/main/post/Category';
import MPostList from './components/main/post/List';
import MPostDetail from './components/main/post/Detail';
import MPostWrite from './components/main/post/Write';

import AHome from './components/admin/Home';
import ACategory from './components/admin/Category';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
    },
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
          path: 'profile',
          name: 'profile',
          component: MProfile
        },
        {
          path: ':target/find',
          name: 'accountFind',
          component: MFindAccount
        },
        {
          path: 'password/change',
          name: 'passwordChange',
          component: MPasswordChange
        },
        {
          path: 'post',
          name: 'post',
          component: MPostWrite
        },
        {
          path: ':categoryName/:page',
          name: 'list',
          components: {
            category: MCategory,
            default: MPostList
          }
        },
        {
          path: ':categoryName/:regDate/:postUrlPathName',
          name: 'detail',
          component: MPostDetail
        }
      ]
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
