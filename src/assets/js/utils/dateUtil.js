export const dateUtil = {

  convertStringToDate : (string) => {
    return string.substring(0, 4) + '.' +
            string.substring(4, 6) + '.' +
            string.substring(6,8);
  },

  convertStringToDateTime : (string) => {
    return string.substring(0, 4) + '.' +
            string.substring(4, 6) + '.' +
            string.substring(6,8) + ' ' +
            string.substring(8, 10) + ':' +
            string.substring(10, 12);
  }

};
