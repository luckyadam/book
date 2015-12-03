'use strict';

var express = require('express');
var controller = require('./book.controller');

var router = express.Router();

router.get('/', controller.getAll);
router.get('/tag/:id', controller.getAll);
router.get('/:id', controller.getBookById);
router.delete('/:id', controller.deleteBookById);
router.post('/', controller.addBook);
router.put('/:id', controller.updateBook);

module.exports = router;
