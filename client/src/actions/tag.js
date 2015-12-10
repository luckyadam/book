'use strict';

import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/ActionTypes';
import Config from 'config';

function requestTags () {
  return {
    type: ActionTypes.REQUEST_TAGS
  };
}

function receiveTags (json) {
  return {
    type: ActionTypes.RECEIVE_TAGS,
    tags: json.data,
    receiveAt: new Date().getTime()
  };
}

export function fetchTags () {
  return dispatch => {
    dispatch(requestTags());
    return fetch(Config.requestHost + '/api/tags/')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTags(json));
      });
  }
}
