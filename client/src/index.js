'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import Home from './containers/Home';
import configureStore from './store/configureStore'

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
