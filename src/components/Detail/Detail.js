import React, { Component } from 'react';
import './detail.scss';

export default class Detail extends Component {
  render() {
    const { title, description, url } = this.props.detail

    return (
      <div className='detail' onClick={() => window.open(url, "_blank")}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )
  }
}