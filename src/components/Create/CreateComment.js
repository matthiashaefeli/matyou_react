import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import Dropdown from 'react-dropdown';

class CreateComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      bookId: '',
      token: Cookie.get('token'),
      error: '',
      isLoaded: false,
      book_ids: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSelect = (event) => {
    this.setState({
      bookId: event.value
    })
  }

  handleSubmit = () => {
    const data = {
      "text": this.state.text,
      "book_id": this.state.bookId,
    }

    const modelData = {
      "comment": data
    }

    const headers = {
      'Authorization': `Bearer ${this.state.token}`,
      'Content-Type': 'application/json'
    }

    axios.post('https://matyou-api.herokuapp.com/comment', modelData, {
      headers: headers
    })
      .then(() => {
        this.setState({
          text: '',
          bookId: ''
        })
      })
      .catch((error) => {
        this.setState({
          error: error
        })
      })
  }

  componentDidMount = () => {
    axios.get('https://matyou-api.herokuapp.com/book')
      .then(
        result => {
          let array = []
          result.data.forEach(element => {
            let hash = {}
            hash['value'] = element.id.toString();
            hash['label'] = element.title;
            array.push(hash)
          });
          this.setState({
            isLoaded: true,
            book_ids: array
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { title } = this.props

    return (
      <div className='createForm' >
        <h3>{title}</h3>
        <form >
          <div>
            <Dropdown
              options={this.state.book_ids}
              onChange={this.handleSelect}
              value={this.state.bookId}
              placeholder="Select an option"
            />
          </div>
          <div>
            <textarea
              type='text'
              name='text'
              placeholder='text'
              value={this.state.text}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <div>
            <input
              type='submit'
              value='save'
              onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    )
  }
}

CreateForm.propTypes = {
  title: PropTypes.string.isRequired
}

export default CreateComment;