import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Comment extends Component {
  render() {
    const { text } = this.props.comment;

    return (
      <p>
        {text}
      </p>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  type: PropTypes.string.isRequired
}

export default Comment;