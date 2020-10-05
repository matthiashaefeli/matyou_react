import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './detail.scss'

class DetailSimple extends Component {
  handleDelete = (id) => {
    const headers = {
      'Authorization': `Bearer ${Cookie.get('token')}`,
      'Content-Type': 'application/json'
    };

    axios.delete(`https://matyou-api.herokuapp.com/note/${id}`, {
      headers: headers
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { title, url, id } = this.props.detail

    let deleteLink
    if (Cookie.get('token')) {
      deleteLink = <FontAwesomeIcon icon={faTrash} className='deleteLink' onClick={this.handleDelete.bind(this, id)} />
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

DetailSimple.propTypes = {
  detail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
}

export default DetailSimple;