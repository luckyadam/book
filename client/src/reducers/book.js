'use strict';

import * as ActionTypes from '../constants/ActionTypes';

export default function books (state = {
  tag: 'all',
  books: [],
  isFeching: false
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
        tag: action.tag
      });
    case ActionTypes.RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        tag: action.tag,
        books: action.books,
        lastUpdated: action.receiveAt
      });
    default:
      return state;
  }
}
