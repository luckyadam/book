'use strict';

import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/ActionTypes';
import Config from 'config';

function requestBooks (tag) {
  return {
    type: ActionTypes.REQUEST_BOOKS,
    tag: tag
  };
}

function receiveBooks (tag, json) {
  return {
    type: ActionTypes.RECEIVE_BOOKS,
    tag,
    books: json.data,
    receiveAt: new Date().getTime()
  };
}

export function fetchBooks (tag = 'all') {
  return dispatch => {
    dispatch(requestBooks(tag));
    let fetchUrl = (tag === 'all') ? Config.requestHost + '/api/books/' : Config.requestHost + '/api/books/tag/' + tag;
    return fetch(fetchUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveBooks(tag, json)));
  }
}
