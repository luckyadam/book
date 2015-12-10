'use strict';

import React, { Component } from 'react';

export default class BookItem extends Component {

  applyBook (e, book) {

  }

  deleteBook (e, book) {

  }

  viewBookDetail (e, book) {

  }

  passApply (e, book) {

  }

  unPassApply (e, book) {

  }

  render () {
    const { book, index, isAdmin } = this.props;
    switch (book.status) {
      case 0: // 可以拿走
        return (
          <tr className={index % 2 !== 0 ? 'pure-table-odd' : ''}>
            <td>
              {index}
            </td>
            <td>
              <a href={book.link} className='book_url'>{book.name}</a>
            </td>
            <td>
              <span className='book_normal'>可拿</span>
            </td>
            <td>
              <a className='button-small pure-button pure-button-primary applyBtn' href='#' onClick={this.applyBook.bind(this, book)}>申请</a>
              {() => {
                if (isAdmin) {
                  return (<a className='button-small button-error pure-button deleteBtn' href='#' onClick={this.deleteBook.bind(this, book)}>删除</a>);
                }
              }}
            </td>
          </tr>
        );
      case 1: // 申请中
        return (
          <tr className={index % 2 !== 0 ? 'pure-table-odd' : ''}>
            <td>
              {index}
            </td>
            <td>
              <a href={book.link} className='book_url'>{book.name}</a>
            </td>
            <td>
              <span className='book_applied'>已被申请</span>
            </td>
            <td>
              <a className='button-small button-success pure-button applyBtn' href='#' onClick={this.viewBookDetail.bind(this, book)}>查看</a>
              {() => {
                if (isAdmin) {
                  return (
                    <span>
                      <a className='button-small button-secondary pure-button passBtn' href='#' onClick={this.passApply.bind(this, book)}>通过</a>
                      <a className='button-small button-warning pure-button passNoBtn' href='#' onClick={this.unPassApply.bind(this, book)}>不通过</a>
                      <a className='button-small button-error pure-button deleteBtn' href='#' onClick={this.deleteBook.bind(this, book)}>删除</a>
                    </span>
                  );
                }
              }}
            </td>
          </tr>
        );
      case 2: // 已被取走
        return (
          <tr className={index % 2 !== 0 ? 'pure-table-odd' : ''}>
            <td>
              {index}
            </td>
            <td>
              <a href={book.link} className='book_url'>{book.name}</a>
            </td>
            <td>
              <span className='book_gained'>已经不见了</span>
            </td>
            <td>
              <a className='button-small button-success pure-button applyBtn' href='#' onClick={this.viewBookDetail.bind(this, book)}>查看</a>
              {() => {
                if (isAdmin) {
                  return (<a className='button-small button-error pure-button deleteBtn' href='#' onClick={this.deleteBook.bind(this, book)}>删除</a>);
                }
              }}
            </td>
          </tr>
        );
    }
  }
}
