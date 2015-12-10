'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import TagList from '../components/TagList';
import BookList from '../components/BookList';
import Footer from '../components/Footer';
import { fetchBooks } from '../actions/book';
import { fetchTags } from '../actions/tag'

export default class Home extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(fetchBooks());
    dispatch(fetchTags());
  }

  render () {
    const { bookList, tagList } = this.props;
    console.log(bookList);
    return (
      <div>
        <Header />
        <div>
          <TagList tagList={tagList} />
          <BookList bookList={bookList} />
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const bookList = state.books.books;
  const tagList = state.tags.tags;
  const isFeching = state.books.isFeching && state.tags.isFeching;
  const tag = state.books.tag;

  return {
    bookList,
    tagList,
    isFeching,
    tag
  };
}

export default connect(mapStateToProps)(Home);
