<template>
  <section>
    <div class="sign-in-wrap">
      <form class="sign-in-form">
        <div>
          <input type="text" id="id" class="sign-in-box input-text input-id" v-model="id" placeholder="아이디">
        </div>
        <div>
          <input type="password" id="password" class="sign-in-box input-text" v-model="password" placeholder="비밀번호">
        </div>
        <div class="sign-in-ok-row">
          <button type="button" class="sign-in-box submit-btn" v-on:click="signIn">로그인</button>
        </div>
        <div class="sign-in-option-row">
          <router-link to="/search/id" class="option-link id-search-link">아이디 찾기</router-link>
          <router-link to="/search/password" class="option-link passwd-search-link">비밀번호 찾기</router-link>
          <router-link to="/sign-up" class="option-link sign-up-link">회원가입</router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      id: '',
      password: ''
    }
  },
  created () {

  },
  methods: {
    signIn () {
      const id = this.id;
      const password = this.password;
      this.$store.dispatch('SIGN_IN', { id, password })
        .then(() => {
          this.linkToHome();
        })
        .catch(error => {
          console.log(error);
        })
    },
    linkToHome () {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.sign-in-wrap {
  width: 500px;
  margin: 0 auto;
}
.sign-in-form {
  font-size: 0;
}
.sign-in-ok-row {
  margin: 50px 0 0 0;
}
.sign-in-option-row {
  margin: 15px 0 0 0;
  text-align: center;
}
.sign-in-box {
  width: 500px;
  line-height: 40px;
  font-size: 16px;
}
.input-text {
  padding: 0 15px;
  border: 1px solid #000;
}
.input-id {
  border: 0;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
}
.submit-btn {
  width: 500px;
}
.option-link {
  font-size: 12px;
  margin: 0 10px;
  text-align: center;
}
.id-search-link {

}
.passwd-search-link {

}
.sign-up-link {

}
</style>
