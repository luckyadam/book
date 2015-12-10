'use strict';

import React, { Component } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <div className='pay'>
        <p className='pay_tip'>觉得我的小书屋还不错，可以长按二维码给我打赏点钱哦，仅限微信~</p>
        <img src='/img/pay.jpg' className='pay_img' />
      </div>
    );
  }
}
