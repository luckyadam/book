'use strict';

const SUCCESS = 0;
const ERR_PARAM_ERROR = 10001;

module.exports = {
  SUCCESS: SUCCESS,
  ERR_PARAM_ERROR: ERR_PARAM_ERROR,

  getErrMessage: function (errCode) {
    switch (errCode) {
      case SUCCESS:
        return {
          no: SUCCESS,
          msg: 'sucess'
        }
        break;
      case ERR_PARAM_ERROR:
        return {
          no: ERR_PARAM_ERROR,
          msg: 'param error'
        }
        break;
    }
  }
};
