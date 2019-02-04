export class Validator {
  constructor () {
    this.flags = {
      id: {
        'isEmpty': false,
        'doesExist': false,
        'isNotAlphabatAndNumber': false
      },
      password: {
        'isEmpty': true,
        'isNotMatch': true,
        'isLessThan8': true
      },
      name: {
        'isEmpty': true
      },
      email: {
        'isEmpty': true,
        'isNotEmailFormat': true
      }
    }
  }

  getFlags () {
    return this.flags
  }

  /*
  * TODO: 필수값 확인
  */
  checkRequiredValue (value) {
    // 공백 검사
    const regex = /^[\0]*$/
    if (!regex.test(value)) {
      value = value.replace(/\s+/g, '')
    }

    return value.length > 0
  }

  /*
  * TODO: 오직 영문자와 숫자 입력 여부 확인
  */
  checkOnlyAlphabatAndNumberValue (value) {
    return new RegExp(/^[a-z0-9+]*$/).test(value)
  }

  /*
  * TODO: 최소 입력 제한 확인
  */
  checkMinimumInputValue (value, min) {
    return value.length >= min
  }

  /*
  * TODO: 두 입력값 일치 여부 확인
  */
  checkSameValue (value1, value2) {
    return value1.val() === value2.val()
  }

  /*
  * TODO: 이메일 형식 확인
  */
  checkEmailValue (value) {
    return new RegExp(/^(\.[0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[a-zA-Z_-]+){1,2}$/).test(value)
  }
}
