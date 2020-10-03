import React, { Component } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

class CreateFormAttachment extends Component {
  state = {
    title: '',
    token: Cookie.get('token'),
    selectedFile: null
  }

  onFileChange = (e) => {
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
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    const headers = {
      'Authorization': `Bearer ${this.state.token}`,
      'Content-Type': 'application/json'
    };

    axios.post("https://matyou-api.herokuapp.com/note", formData, {
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
    return (
      <div className='createForm' >
        <h3>Good To Know</h3>
        <form >
          <div>
            <input
              type='text'
              placeholder='title'
              value={this.state.title}
              autoComplete='off'
              onChange={this.handleTitleChange.bind(this)} />
          </div>
          <div>
            <input
              type="file"
              onChange={this.onFileChange.bind(this)} />
          </div>
          <div>
            <input
              type='submit'
              value='save'
              onClick={this.handleSubmit.bind(this)} />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateFormAttachment;