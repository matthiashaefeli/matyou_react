import React, { Component } from 'react'
import Cookie from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './detail.scss'

export default class DetailSimple extends Component {
  render() {
    const { title, url } = this.props.detail

    let deleteLink
    if (Cookie.get('token')) {
      deleteLink = <FontAwesomeIcon icon={faTrash} className='deleteLink' />
    } else {
      deleteLink = null
    }

    return (
      <>
        <div className='detailSimple' onClick={() => window.open(url, "_blank")}>
          <h1>{title}</h1>
        </div>
        {deleteLink}
      </>
    )
  }
}
