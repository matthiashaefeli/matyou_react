import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './title.scss';

class Title extends Component {
  render() {
    const { title, color } = this.props

    return (
      <div className='title' style={{ color: color }}>
        {title}
      </div>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
}

export default Title;