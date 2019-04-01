import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}, // keys : id, name, role, accessToken
    isSignedIn: false
  },
  mutations: {
    SET_USER_INFO (state, user) {
      state.user = user;

      if (Object.keys(state.user).length === 0) {
        delete localStorage.user;
        delete axios.defaults.headers.common['Authorization'];
        state.isSignedIn = false;
      } else {
        localStorage.user = JSON.stringify(user);
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`; // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
        state.isSignedIn = true;
      }
    }
  },
  // async
  actions: {
    SIGN_IN (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('/sign-in', null, {
          params: {
            id: payload.id,
            passwd: payload.passwd
          },
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            context.commit('SET_USER_INFO', {
              id: response.data.id,
              name: response.data.name,
              role: response.data.role,
              accessToken: response.data.accessToken
            });
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });

    },
    SIGN_OUT (context) {
      return new Promise((resolve, reject) => {
        axios.post('/sign-out')
          .then(response => {
            context.commit('SET_USER_INFO', {});
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    REMOVE_USER_INFO (context) {
      context.commit('SET_USER_INFO', {});
    },
    REFRESH_CALLBACK (context) {
      if (localStorage.hasOwnProperty('user')) {
        const user = JSON.parse(localStorage.user);
        context.commit('SET_USER_INFO', user);
      } else {
        console.log('not exist user');
      }
    }
  }
});
