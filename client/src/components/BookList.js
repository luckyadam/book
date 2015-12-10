'use strict';

import React, { Component } from 'react';
import BookItem from './BookItem';

export default class BookList extends Component {
  render () {
    const bookList = this.props.bookList;
    return (
      <table className='pure-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>书名</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => (
            <BookItem index={index} book={book} isAdmin={false} key={index}></BookItem>
          ))}
        </tbody>
      </table>
    );
  }
}
