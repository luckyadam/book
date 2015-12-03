'use strict';

var errors = require('./components/errors');

module.exports = function (app) {

  app.use('/api/books', require('./api/book'));
  app.use('/api/tags', require('./api/tag'));

  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  //将所有的请求定向到index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(app.get('appPath') + '/index.html');
    });
};
