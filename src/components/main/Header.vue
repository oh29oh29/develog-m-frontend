<template>
  <header>
    <div class="logo-wrap">
      <router-link to="/" class="logo-link">
        <span class="logo-text">oh29oh29</span>
        <span class="logo-text">기술블로그</span>
      </router-link>
    </div>
    <div class="member-wrap">
      <div v-if="existUserInfo">
        <span class="user-name">{{ userInfo.name }} 님</span>
        <button class="sign-inout-btn" v-on:click="signOut">Sign out</button>
      </div>
      <router-link to="/sign-in" class="sign-inout-btn" v-else>Sign in</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      existUserInfo: false,
      userInfo: {}
    }
  },
  created () {
    this.refreshUserInfo();
  },
  watch: {
    '$route' () {
      this.refreshUserInfo();
    }
  },
  methods: {
    refreshUserInfo () {
      this.userInfo = this.$store.state.userInfo;
      this.existUserInfo = Object.entries(this.userInfo).length > 0 && this.userInfo.id !== '' && this.userInfo.name !== '' && this.userInfo.accessToken !== '';
    },
    signOut () {
      this.$store.dispatch('SIGN_OUT', () => {
        this.$router.go(0);
      });
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  margin: 0 0 80px 0;
}
.logo-wrap {
  display: inline-block;
  line-height: 57px;
  margin: 0 0 0 20px;
}
.logo-link {

}
.logo-text:first-child {
  font-size: 25px;
}
.logo-text:last-child {
  vertical-align: bottom;
  margin: 0 0 0 5px;
}
.member-wrap {
  display: inline-block;
  float: right;
  line-height: 60px;
  margin: 0 20px 0 0;
}
.sign-inout-btn {
  font-size: 12px;
  padding: 8px 10px;
  border: 1px solid #bdbdbd;
}
.user-name {
  font-size: 13px;
  margin: 0 10px 0 0;
}
</style>
