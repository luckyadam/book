'use strict';

import React, { Component } from 'react';
// import { Link } from 'react-router';

export default class TagList extends Component {
  render () {
    const tagList = this.props.tagList;
    return (
      <div className='tags'>
        <ul>
          <li className='tags_item'><a href={'/'}>全部</a></li>
          {tagList.map((tag, index) => (
            <li className='tags_item' key={index}><a href={`/tag/${tag._id}`}>{tag.name}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}
