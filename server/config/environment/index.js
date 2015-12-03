'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

var all = {
  env: process.env.NODE_ENV,

  // 项目根目录
  root: path.normalize(__dirname + '/../../..'),

  // 服务端口
  port: process.env.PORT || 9000,

  // Secret for session
  secrets: {
    session: 'book-store-secret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

};

// 根据process.env.NODE_ENV获取配置
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
