// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import { MockContainer } from "./mock/MockContainer";
// detail
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/obsidian.css';
// write
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';

import './assets/font/d2coding.css';

axios.interceptors.response.use(response => {
  if (response === undefined) {
    return new Promise(() => {});
  }
  return Promise.resolve(response);
}, error => {
  if (error.response.status === 401) {
    store.dispatch('REMOVE_USER_INFO');
    router.push('/sign-in');
    return;
  }
  return Promise.reject(error);
});

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

if (process.env.NODE_ENV === 'development') {
  new MockContainer(axios);
}

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
