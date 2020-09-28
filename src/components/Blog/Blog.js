import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    const { title, description, url } = this.props.blog

    return (
      <div className='blog' onClick={() => window.open(url, "_blank")}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )
  }
}
