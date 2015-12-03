'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

// 连接数据库
mongoose.connect(config.mongo.uri, config.mongo.options);

// 设置server
var app = express();
var server = require('http').createServer(app);

// 设置响应头
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // 拦截OPTIONS 方法
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

require('./config/express')(app);
require('./routes')(app);

server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

exports = module.exports = app;
