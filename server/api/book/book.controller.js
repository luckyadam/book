'use strict';

var Book = require('./book.model');
var Tag = require('../tag/tag.model');
var ErrCode = require('../../util/errcode');
var _ = require('lodash');

exports.getAll = function (req, res) {
  var searchParam = {};
  if (req.params.id) {
    searchParam.tag = req.params.id;
  }
  Book
    .find(searchParam)
    .populate('tag')
    .sort({status: 'asc'})
    .exec(function (err, books) {
      console.log(books);
      if (err) { handleError(res, err) };
      return res.status(200).json({
        no: ErrCode.SUCCESS,
        data: books
      });
  });
};

exports.getBookById = function (req, res) {
  var id = req.params.id;
  Book
    .findById(id)
    .populate('tag')
    .exec(function (err, book) {
      if (err) return handleError(err);
      return res.status(200).json({
        no: ErrCode.SUCCESS,
        data: book
      });
    });
};

exports.deleteBookById = function (req, res) {
  Book.findById(req.params.id, function (err, book) {
    if(err) { return handleError(res, err); }
    if(!book) { return res.send(404); }
    book.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.addBook = function (req, res) {
  var body = req.body;
  var tagName = body.tag;

  Tag.create({
    name: tagName
  }, function (err, tag) {
    if (err) {
      if (err.code === 11000) {
        Tag.findOne({name: tagName})
          .exec(function (err, tag) {
            return createBook(tag);
          });
        return;
      }
      return handleError();
    }
    createBook(tag);
  });

  function createBook (tag) {
    Book.create({
      name: body.name,
      author: body.author,
      tag: tag._id,
      url: body.url,
      status: 0
    }, function (err, book) {
      console.log(book);
      return res.send(200, {
        no: 0,
        data: {
          book: book
        }
      });
    });
  }
};

exports.updateBook = function (req, res) {
  if(req.body._id) { delete req.body._id; }
  Book.findById(req.params.id, function (err, book) {
    if (err) { return handleError(res, err); }
    if(!book) { return res.send(404); }
    var updated = _.merge(book, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json({
        no: 0,
        data: {
          book: book
        }
      });
    });
  });
};
