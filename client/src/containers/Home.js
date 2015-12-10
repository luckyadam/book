'use strict';

import React, { Component } from 'react';

import Header from '../components/Header';
import TagList from '../components/TagList';
import BookList from '../components/BookList';
import Footer from '../components/Footer';

export default class Home extends Component {
  render () {
    const { tagList, bookList } = this.props;
    return (
      <div>
        <Header />
        <TagList tagList={tagList} />
        <BookList bookList={bookList} />
        <Footer />
      </div>
    );
  }
}
