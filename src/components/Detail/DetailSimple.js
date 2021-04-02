import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './detail.scss'

class DetailSimple extends Component {

  render() {
    const { title, url } = this.props.detail

    return (
      <>
        <div className='detailSimple' onClick={() => window.open(url, "_blank")}>
          <h1>{title}</h1>
        </div>
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