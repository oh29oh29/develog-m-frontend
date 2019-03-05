import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      id: '',
      name: '',
      accessToken: ''
    }
  },
  mutations: {
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo;
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

          // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
