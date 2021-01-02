import React, { Component } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

class CreateFormAttachment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      url: '',
      author: '',
      description: '',
      sendUrl: this.props.sendUrl,
      type: this.props.type,
      token: Cookie.get('token'),
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleChangeFile = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append(
      "title",
      this.state.title
    );

    formData.append(
      "author",
      this.state.author
    );

    if (this.state.type === 'note') {
      formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    } else if (this.state.type === 'book') {
      formData.append(
        "image",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    }

    const headers = {
      'Authorization': `Bearer ${this.state.token}`,
      'Content-Type': 'application/json'
    };

    axios.post(this.state.sendUrl, formData, {
      headers: headers
    })
      .then(() => {
        this.setState({
          title: '',
          selectedFile: null
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { title, type } = this.props

    let input
    if (type == 'book') {
      input = <div>
                <input
                  type='text'
                  placeholder='author'
                  value={this.state.author}
                  autoComplete='off'
                  onChange={this.handleAuthorChange} />
              </div>
    } else {
      input = null
    }

    return (
      <div className='createForm' >
        <h3>{ title }</h3>
        <form >
          <div>
            <input
              type='text'
              placeholder='title'
              value={this.state.title}
              autoComplete='off'
              onChange={this.handleTitleChange} />
          </div>
          {input}
          <div>
            <input
              type="file"
              onChange={this.handleChangeFile} />
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

export default CreateFormAttachment;