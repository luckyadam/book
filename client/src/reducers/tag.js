'use strict';

import * as ActionTypes from '../constants/ActionTypes';

export default function tags (state = {
  tags: [],
  isFetching: false
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_TAGS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActionTypes.RECEIVE_TAGS:
      return Object.assign({}, state, {
        isFetching: false,
        tags: action.tags,
        lastUpdated: action.receiveAt
      });
    default:
      return state;
  }
};
