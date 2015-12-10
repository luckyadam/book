'use strict';

import { combineReducers } from 'redux';
import books from './book';
import tags from './tag';

const rootReducer = combineReducers({
  books,
  tags
});

export default rootReducer;
