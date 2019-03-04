import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: {}
  },
  mutations: {
    SET_ACCESS_TOKEN (state, accessToken) {
      state.accessToken = accessToken;
    }
  },
  // async
  actions: {
    SIGN_IN (context, payload) {
      axios.get('/sign-in', payload)
        .then(response => {
          console.log(response);
          context.commit('SET_ACCESS_TOKEN', response.data.accessToken);

          // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
          console.log(axios.defaults.headers);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
