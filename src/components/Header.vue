<template>
  <header>
    <div class="logo-wrap">
      <a href="/" class="logo-link">
        <span class="logo-text">oh29oh29</span>
        <span class="logo-text">기술블로그</span>
      </a>
    </div>
    <div class="member-wrap">
      <button id="signInBtn" class="sign-in-btn" onclick="location.href='/member/sign-in'">로그인</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  background-color: cyan;
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
.sign-in-btn {
  width: 70px;
  line-height: 23px;
  font-size: 12px;
}
</style>
