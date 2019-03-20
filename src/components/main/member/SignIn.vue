<template>
  <section class="sign-in-wrap">
    <div>
      <input type="text" id="id" class="item-value input-text input-id" v-model="id" placeholder="아이디">
    </div>
    <div>
      <input type="password" id="password" class="item-value input-text" v-model="password" placeholder="비밀번호">
    </div>
    <div class="btn-wrap">
      <button type="button" class="submit-btn" v-on:click="signIn">로그인</button>
    </div>
    <div class="sign-in-option-row">
      <router-link v-bind:to="{ name: 'accountFind', params: { target: 'id' }}" class="option-link">아이디 찾기</router-link>
      <router-link v-bind:to="{ name: 'accountFind', params: { target: 'password' }}" class="option-link">비밀번호 찾기</router-link>
      <router-link to="/sign-up" class="option-link">회원가입</router-link>
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
      const passwd = this.password;
      this.$store.dispatch('SIGN_IN', { id, passwd })
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
.item-value {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  font-size: 16px;
}
.input-text {
  border: 1px solid #bdbdbd;
}
.input-id {
  border: 0;
  border-top: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
}
.btn-wrap {
  margin: 50px 0 0 0;
  text-align: center;
}
.submit-btn {
  width: 100%;
  height: 40px;
  margin: 20px 0;
  font-size: 14px;
}
.sign-in-option-row {
  text-align: center;
}
.option-link {
  font-size: 12px;
  margin: 0 10px;
  text-align: center;
}
</style>
