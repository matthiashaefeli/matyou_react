import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './detail.scss';

class Detail extends Component {
  render() {
    const { title, body, url } = this.props.detail;

    return (
      <>
        <div className='detail' onClick={() => window.open(url, "_blank")}>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: body.body }} />
        </div>
      </>
    )
  }
}

Detail.propTypes = {
  detail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  type: PropTypes.string.isRequired
}

export default Detail;