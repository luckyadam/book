'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Home from './containers/Home';

var tagList = [
  {_id: 'sadsadasdasdasd', name: 'hhh'}
];
var bookList = [
  {_id: 'yuhuh2323', name: 'hhh', status: 0}
];
ReactDom.render(
  <Home tagList={tagList} bookList={bookList} />,
  document.getElementById('app')
);
