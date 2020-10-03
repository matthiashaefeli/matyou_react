import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';

class CreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      url: '',
      description: '',
      sendUrl: this.props.sendUrl,
      type: this.props.type,
      token: Cookie.get('token'),
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    const data = {
      "title": this.state.title,
      "url": this.state.url,
      "description": this.state.description
    }

    let modelData
    if (this.state.type === 'blog') {
      modelData = {
        "blog": data
      }
    } else if (this.state.type === 'challenge') {
      modelData = {
        "challenge": data
      }
    }

    const headers = {
      'Authorization': `Bearer ${this.state.token}`,
      'Content-Type': 'application/json'
    }

    axios.post(this.state.sendUrl, modelData, {
      headers: headers
    })
      .then((response) => {
        this.setState({
          title: '',
          url: '',
          desc: ''
        })
        this.setState({ response: response })
      })
      .catch((error) => {
        this.setState({
          error: error
        })
      })
  }

  render() {
    const { title } = this.props

    return (
      <div className='createForm' >
        <h3>{title}</h3>
        <form >
          <div>
            <input
              type='text'
              name='title'
              placeholder='title'
              value={this.state.title}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <div>
            <input
              type='text'
              name='url'
              placeholder='url'
              value={this.state.url}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <div>
            <input
              type='text'
              name='description'
              placeholder='desc'
              value={this.state.desc}
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

export default CreateForm;