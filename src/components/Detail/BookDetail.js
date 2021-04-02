import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './detail.scss';

class BookDetail extends Component {
  render() {
    const { url, id } = this.props.detail;

    let sectionStyle = {
      backgroundImage: `url(${url})`,
      width: '11em',
      height: '17em',
      cursor: 'pointer',
      margin: '10px',
      color: 'black',
    }

    return (
      <>
        <Link to={{
          pathname: '/comment',
          state: {
            id: id
          }
        }}>
          <img src={url} alt={'hello'} style={sectionStyle} />
        </Link>
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