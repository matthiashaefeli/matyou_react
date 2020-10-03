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
      desc: '',
      sendUrl: this.props.sendUrl,
      type: this.props.type,
      token: Cookie.get('token'),
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleUrlChange(e) {
    this.setState({
      url: e.target.value
    })
  }

  handleDescChange(e) {
    this.setState({
      desc: e.target.value
    })
  }

  handleSubmit() {
    const data = {
      "title": this.state.title,
      "url": this.state.url,
      "description": this.state.desc
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
              placeholder='title'
              value={this.state.title}
              autoComplete='off'
              onChange={this.handleTitleChange} />
          </div>
          <div>
            <input
              type='text'
              placeholder='url'
              value={this.state.url}
              autoComplete='off'
              onChange={this.handleUrlChange} />
          </div>
          <div>
            <input
              type='text'
              placeholder='desc'
              value={this.state.desc}
              autoComplete='off'
              onChange={this.handleDescChange} />
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