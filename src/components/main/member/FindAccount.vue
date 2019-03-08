<template>
  <section class="find-account-wrap">
    <h1 v-if="target === 'id'">아이디 찾기</h1>
    <h1 v-if="target === 'password'">비밀번호 찾기</h1>
    <fieldset>
      <div v-if="target === 'password'" class="row">
        <label for="id" class="item-label">아이디</label>
        <input id="id" class="item-value input-text">
      </div>
      <div class="row">
        <label for="name" class="item-label">이름</label>
        <input id="name" class="item-value input-text">
      </div>
      <div class="row">
        <label for="email" class="item-label">이메일</label>
        <input id="email" class="item-value input-text">
        <!--<p class="validation-msg" v-if="validatorFlags.password.isEmpty || validatorFlags.password.isLessThan8">{{ validationMsg }}</p>-->
      </div>
    </fieldset>
    <div class="description-wrap">
      <div v-if="target === 'id'">
        <p class="desc-text">가입하실 때 입력한 이름, 이메일 주소를 입력해 주세요.</p>
      </div>
      <div v-if="target === 'password'">
        <p class="desc-text">가입하실 때 입력한 아이디, 이름, 이메일 주소를 입력해 주세요.</p>
        <p class="desc-text">임시 비밀번호를 이메일로 보내드립니다.</p>
      </div>
    </div>
    <div class="btn-wrap">
      <button class="ok-btn">확인</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "FindAccount",
  data () {
    return {
      target: this.$route.params.target
    }
  },
  created () {
  }
}
</script>

<style scoped>
.find-account-wrap {
  width: 500px;
  margin: 0 auto;
}
fieldset {
  margin: 10px 0;
  border: 0;
}
.row {
  margin: 25px 0;
}
.item-label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px 0;
}
.item-value {
  width: 500px;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  font-size: 16px;
}
.input-text {
  border: 1px solid #bdbdbd;
}
.description-wrap {
  padding: 20px 10px;
  background-color: #fafafa;
  font-size: 14px;
}
.desc-text {
  margin: 0 0 0 5px;
}
.desc-text:nth-child(2) {
  margin-top: 5px;
}
.btn-wrap {
  text-align: center;
}
.ok-btn {
  width: 100%;
  height: 40px;
  margin: 20px 0;
  font-size: 14px;
}
</style>
