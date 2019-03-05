import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {}, // keys : id, name, accessToken
    existUserInfo: false
  },
  mutations: {
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo;

      if (Object.keys(state.userInfo).length === 0) {
        delete axios.defaults.headers.common['Authorization'];
        delete localStorage.userInfo;
        state.existUserInfo = false;
      } else {
        localStorage.userInfo = JSON.stringify(userInfo);
        state.existUserInfo = true;
        // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
        axios.defaults.headers.common['Authorization'] = `Bearer ${userInfo.accessToken}`;
      }
    }
  },
  // async
  actions: {
    SIGN_IN (context, payload) {
      axios.get('/sign-in', payload)
        .then(response => {
          console.log(response);
          context.commit('SET_USER_INFO', {
            id: response.data.id,
            name: response.data.name,
            accessToken: response.data.accessToken
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    SIGN_OUT (context, callbank) {
      axios.get('/sign-out')
        .then(response => {
          console.log(response);
          this.dispatch('REMOVE_USER_INFO');
          if (typeof callbank === 'function') {
            callbank();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    REMOVE_USER_INFO (context) {
      context.commit('SET_USER_INFO', {});
    },
    REFRESH_CALLBACK (context) {
      if (localStorage.hasOwnProperty('userInfo')) {
        const userInfo = JSON.parse(localStorage.userInfo);
        console.log(userInfo);
        context.commit('SET_USER_INFO', userInfo);
      } else {
        console.log('not exist userInfo');
      }
    }
  }
});
