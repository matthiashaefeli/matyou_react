import React, { Component } from 'react'
import './detail.scss'

export default class DetailSimple extends Component {
  render() {
    const { title, url } = this.props.detail
    return (
      <div className='detailSimple' onClick={() => window.open(url, "_blank")}>
        <h1>{title}</h1>
      </div>
    )
  }
}
