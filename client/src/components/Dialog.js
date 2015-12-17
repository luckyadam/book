'use strict';

import React, { Component } from 'react';

export default class Dialog extends Component {
  getDefaultProps () {
    return {
      isOpen: false
    };
  }

  componentDidMount () {
    this.node = document.createElement('div');
    this.node.className = 'dialog';
    document.body.appendChild(this.node);
    this.renderPortal(this.props);
  }

  render () {
    return null;
  }
}
