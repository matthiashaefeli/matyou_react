import React, { Component } from 'react';
import './title.scss';

export default class Title extends Component {
  render() {
    const { title, color } = this.props

    return (
      <div className='title' style={{ color: color }}>
        {title}
      </div>
    )
  }
}

