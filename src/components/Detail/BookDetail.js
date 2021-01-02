import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import Cookie from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './detail.scss';


class BookDetail extends Component {

  handleDelete = (id, type) => {
    const headers = {
      'Authorization': `Bearer ${Cookie.get('token')}`,
      'Content-Type': 'application/json'
    };

    axios.delete(`https://matyou-api.herokuapp.com/${type}/${id}`, {
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
    const { title, author, url, id } = this.props.detail;
    const { type } = this.props

    let sectionStyle = {
      backgroundImage: `url(${url})`,
      width: '11em',
      height: '17em',
      cursor: 'pointer',
      margin: '10px',
      color: 'black',
    }

    let deleteLink
    if (Cookie.get('token')) {
      deleteLink = <FontAwesomeIcon icon={faTrash} className='deleteLink' onClick={this.handleDelete.bind(this, id, type)} />
    } else {
      deleteLink = null
    }

    return (
      <>
        <div style={sectionStyle} onClick={() => window.open(url, "_blank")} >
        </div>
        {deleteLink}
      </>
    )
  }
}



BookDetail.propTypes = {
  detail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  type: PropTypes.string.isRequired
}

export default BookDetail;