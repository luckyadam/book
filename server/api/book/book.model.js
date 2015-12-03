'use strict'

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: String,
  author: String,
  tag: { type: Schema.Types.ObjectId, ref: 'Tag' },
  status: Number, // 0 正常 1被人申请 2被获取
  applier: String,
  applyTime: Date,
  gainer: String,
  gainTime: Date,
  url: String
});

BookSchema.virtual('addedTime')
  .get(function(){
    return this._id.getTimestamp();
  });

module.exports = mongoose.model('Book', BookSchema);
