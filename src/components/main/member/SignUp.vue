<template>
  <section class="sign-up-wrap">
    <h1>회원 가입</h1>
    <fieldset>
      <div class="row">
        <label for="id" class="item-label">아이디</label>
        <input type="text" id="id" class="item-value input-text input-short-text" v-model="idValue" v-on:blur="validate">
        <button type="button" id="idCheckBtn" class="sub-btn ready-sub-btn">중복확인</button>
        <p class="validation-msg" v-if="validatorFlags.id.isEmpty || validatorFlags.id.doesExist || validatorFlags.id.isNotAlphabatAndNumber">{{ validationMsg }}</p>
      </div>
      <div class="row">
        <label for="password" class="item-label">비밀번호</label>
        <input type="password" id="password" class="item-value input-text">
        <p class="validation-msg" v-if="validatorFlags.password.isEmpty || validatorFlags.password.isLessThan8">{{ validationMsg }}</p>
      </div>
      <div class="row">
        <label for="passwordConfirm" class="item-label">비밀번호 확인</label>
        <input type="password" id="passwordConfirm" class="item-value input-text">
        <p class="validation-msg" v-if="validatorFlags.password.isEmpty || validatorFlags.password.isNotMatch">{{ validationMsg }}</p>
      </div>
      <div class="row">
        <label for="name" class="item-label">이름</label>
        <input type="text" id="name" class="item-value input-text">
        <p class="validation-msg" v-if="validatorFlags.name.isEmpty">{{ validationMsg }}</p>
      </div>
      <div class="row">
        <label for="email" class="item-label">이메일</label>
        <input type="text" id="email" class="item-value input-text">
        <p class="validation-msg" v-if="validatorFlags.email.isEmpty || validatorFlags.email.isNotEmailFormat">{{ validationMsg }}</p>
      </div>
    </fieldset>
    <div class="btn-wrap">
      <button type="button" class="ok-btn">가입하기</button>
    </div>
  </section>
</template>

<script>
import { Validator } from '../../../assets/js/validator';
export default {
  name: 'SignUp',
  data () {
    return {
      validator: new Validator(),
      validatorFlags: {},
      validationMsg: 'test',
      idValue: ''
    }
  },
  created () {
    this.validatorFlags = this.validator.getFlags();
    this.validatorFlags.id.isEmpty = true;
  },
  methods: {
    validate () {
      console.log(this.validator.checkRequiredValue(this.idValue));
    }
  }
}
</script>

<style scoped>
.sign-up-wrap {
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
.input-short-text {
  width: 420px;
  vertical-align: middle;
  border: 0;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
}
.validation-msg {
  font-size: 13px;
  padding: 5px 0 0 0;
  color: #ff0000;
}
.sub-btn {
  width: 80px;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  background: none;
  border: 1px solid #bdbdbd;
}
.ready-sub-btn {

}
.failure-sub-btn {
  background-color: #F15F5F;
}
.success-sub-btn {
  background-color: #86E57F;
}
.btn-wrap {
  text-align: center;
}
.ok-btn {
  width: 120px;
  height: 40px;
  margin: 20px 0;
  font-size: 14px;
}
</style>
