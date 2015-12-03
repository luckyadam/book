'use strict';

var Tag = require('./tag.model');
var ErrCode = require('../../util/errcode');

exports.getAll = function (req, res) {
  Tag
    .find()
    .exec(function (err, tags) {
      if (err) { handleError(res, err) };
      return res.status(200).json({
        no: ErrCode.SUCCESS,
        data: tags
      });
  });
};
