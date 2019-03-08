<template>
  <section class="profile-wrap">
    <h1>내 정보</h1>
    <fieldset>
      <div class="row">
        <label class="item-label">아이디</label>
        <span class="item-value">oh29oh29</span>
      </div>
      <div class="row">
        <label class="item-label">이름</label>
        <div v-if="isUpdateMode">
          <input type="text" class="item-value input-text" v-model="user.name">
          <!--<p class="validation-msg" v-if="validatorFlags.name.isEmpty">{{ validationMsg }}</p>-->
        </div>
        <span v-else class="item-value">{{ user.name }}</span>
      </div>
      <div class="row">
        <label class="item-label">이메일</label>
        <div v-if="isUpdateMode">
          <input type="text" class="item-value input-text" v-model="user.email">
          <!--<p class="validation-msg" v-if="validatorFlags.email.isEmpty || validatorFlags.email.isNotEmailFormat">{{ validationMsg }}</p>-->
        </div>
        <span v-else class="item-value">{{ user.email }}</span>
      </div>
    </fieldset>
    <div class="btn-wrap">
      <div v-if="isUpdateMode">
        <button type="button" class="profile-btn">완료</button>
        <button type="button" class="profile-btn" v-on:click="changeUpdateMode">취소</button>
      </div>
      <div v-else>
        <button type="button" class="profile-btn" v-on:click="changeUpdateMode">수정하기</button>
        <button type="button" class="profile-btn" v-on:click="linkToPasswordChange">비밀번호 변경하기</button>
      </div>
    </div>
  </section>
</template>

<script>
import { Validator } from '../../../assets/js/validator';
export default {
  name: "Profile",
  data () {
    return {
      user: {
        id: 'oh29oh29',
        name: '권혁재',
        email: 'hyukjae89@gmail.com'
      },
      validator: new Validator(),
      validatorFlags: {},
      validationMsg: 'test',
      isUpdateMode: false
    }
  },
  created () {
    this.validatorFlags = this.validator.getFlags();
  },
  methods: {
    changeUpdateMode () {
      this.isUpdateMode = !this.isUpdateMode;
    },
    linkToPasswordChange () {
      this.$router.push({ name: 'passwordChange' })
    }
  }
}
</script>

<style scoped>
.profile-wrap {
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
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  font-size: 16px;
}
.input-text {
  border: 1px solid #bdbdbd;
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
.btn-wrap {
  text-align: center;
}
.profile-btn {
  width: 120px;
  height: 40px;
  margin: 20px 0;
  font-size: 14px;
}
.profile-btn:nth-child(2) {
  margin: 0 0 0 10px;
}
</style>

