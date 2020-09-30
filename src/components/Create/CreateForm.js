import React, { Component } from 'react'

class CreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      url: '',
      desc: '',
      sendUrl: this.props.url
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
    console.log('')
  }

  render() {
    const { title } = this.props

    return (
      <div className='createForm'>
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

export default CreateForm;