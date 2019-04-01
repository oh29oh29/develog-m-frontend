<template>
  <header>
    <div class="logo-wrap">
      <router-link to="/" class="logo-link">
        <span class="logo-text">oh29oh29</span>
        <span class="logo-text">기술블로그</span>
      </router-link>
    </div>
    <div class="member-wrap">
      <div v-if="isSignedIn">
        <span class="user-name" v-on:click="linkToProfile">{{ user.name }} 님</span>
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
      user: {},
      isSignedIn: false,
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
      this.user = this.$store.state.user;
      this.isSignedIn = this.$store.state.isSignedIn;
    },
    signOut () {
      this.$store.dispatch('SIGN_OUT')
        .then(response => {
          console.log(response);
          this.$router.go(0);
        })
        .catch(error => {
          console.log(error);
        });
    },
    linkToProfile () {
      this.$router.push('/profile');
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
  padding: 6px 8px;
  border: 0;
}
.user-name {
  font-size: 13px;
  margin: 0 10px 0 0;
  cursor: pointer;
}
</style>
