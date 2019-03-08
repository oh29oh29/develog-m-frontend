<template>
  <section class="password-change-wrap">
    <h1>비밀번호 변경하기</h1>
    <fieldset>
      <div class="row">
        <label for="password" class="item-label">현재 비밀번호</label>
        <input type="password" id="password" class="item-value input-text">
      </div>
      <div class="row">
        <label for="newPassword" class="item-label">새 비밀번호</label>
        <input type="password" id="newPassword" class="item-value input-text">
        <!--<p class="validation-msg" v-if="validatorFlags.password.isEmpty || validatorFlags.password.isLessThan8">{{ validationMsg }}</p>-->
      </div>
      <div class="row">
        <label for="newPasswordConfirm" class="item-label">새 비밀번호 확인</label>
        <input type="password" id="newPasswordConfirm" class="item-value input-text">
        <!--<p class="validation-msg" v-if="validatorFlags.password.isEmpty || validatorFlags.password.isNotMatch">{{ validationMsg }}</p>-->
      </div>
    </fieldset>
    <div class="btn-wrap">
      <button class="ok-btn">확인</button>
    </div>
  </section>
</template>

<script>
import { Validator } from '../../../assets/js/validator';
export default {
  name: "PasswordChange",
  data () {
    return {
      validator: new Validator()
    }
  }
}
</script>

<style scoped>
.password-change-wrap {
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
