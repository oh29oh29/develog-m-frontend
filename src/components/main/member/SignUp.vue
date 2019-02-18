<template>
  <section>
    <div class="sign-up-wrap">
      <form id="signUpForm" class="sign-up-form" action="/member/sign-up" method="post">
        <!--<input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />-->
        <fieldset class="sign-up-fieldset">
          <legend>기본 정보</legend>
          <div class="sign-up-row">
            <label for="id" class="label-for-input">아이디</label>
            <input type="text" id="id" class="sign-up-box input-text input-short-text" name="id" v-model="idValue" v-on:blur="validate">
            <button type="button" id="idCheckBtn" class="sub-btn ready-sub-btn">중복확인</button>
            <p class="validation-msg" v-show="validatorFlags.id.isEmpty || validatorFlags.id.doesExist || validatorFlags.id.isNotAlphabatAndNumber">{{ validationMsg }}</p>
          </div>
          <div class="sign-up-row">
            <label for="password" class="label-for-input">비밀번호</label>
            <input type="password" id="password" class="sign-up-box input-text" name="passwd">
            <p class="validation-msg" v-show="validatorFlags.password.isEmpty || validatorFlags.password.isLessThan8">{{ validationMsg }}</p>
          </div>
          <div class="sign-up-row">
            <label for="passwordConfirm" class="label-for-input">비밀번호 확인</label>
            <input type="password" id="passwordConfirm" class="sign-up-box input-text">
            <p class="validation-msg" v-show="validatorFlags.password.isEmpty || validatorFlags.password.isNotMatch">{{ validationMsg }}</p>
          </div>
          <div class="sign-up-row">
            <label for="name" class="label-for-input">이름</label>
            <input type="text" id="name" class="sign-up-box input-text" name="name">
            <p class="validation-msg" v-show="validatorFlags.name.isEmpty">{{ validationMsg }}</p>
          </div>
          <div class="sign-up-row">
            <label for="email" class="label-for-input">이메일</label>
            <input type="text" id="email" class="sign-up-box input-text" name="email">
            <p class="validation-msg" v-show="validatorFlags.email.isEmpty || validatorFlags.email.isNotEmailFormat">{{ validationMsg }}</p>
          </div>
        </fieldset>
        <div class="sign-up-row">
          <button id="submitBtn" class="sign-up-box submit-btn">가입하기</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { Validator } from '../../../assets/js/validator';
const validator = new Validator();
export default {
  name: 'SignUp',
  data () {
    return {
      validatorFlags: null,
      validationMsg: 'test',
      idValue: ''
    }
  },
  created () {
    this.validatorFlags = validator.getFlags();
    this.validatorFlags.id.isEmpty = true;
  },
  methods: {
    validate () {
      console.log(validator.checkRequiredValue(this.idValue));
    }
  }
}
</script>

<style scoped>
.sign-up-wrap {
  width: 500px;
  margin: 0 auto;
}
.sign-up-form {
  font-size: 0;
}
.sign-up-fieldset {
  border: 0;
  margin: 0 0 50px 0;
}
.sign-up-fieldset legend{
  font-size: 14px;
  font-weight: bold;
  padding: 0 10px 0 0;
}
.sign-up-row {
  margin: 25px 0;
}
.label-for-input {
  font-size: 16px;
  display: block;
}
.sign-up-box {
  line-height: 40px;
  font-size: 16px;
}
.input-text {
  width: 468px;
  padding: 0 15px;
  border: 1px solid #000;
}
.input-short-text {
  width: 389px;
  vertical-align: middle;
  border: 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
}
.validation-msg {
  font-size: 13px;
  padding: 5px 0 0 0;
  color: #ff0000;
}
.sub-btn {
  width: 80px;
  line-height: 40px;
  vertical-align: middle;
  background: none;
  border: 1px solid #000;
}
.ready-sub-btn {
  background-color: #FAED7D;
}
.failure-sub-btn {
  background-color: #F15F5F;
}
.success-sub-btn {
  background-color: #86E57F;
}
.submit-btn {
  width: 500px;
  margin: 20px 0;
  font-weight: bold;
  background-color: green;
}
.submit-btn:focus {
  background-color: gray;
}
</style>
