import React, { Component } from 'react'

class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  handleUserNameChange(e) {
    this.setState({
      userName: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit() {

  }

  render() {
    return (
      <form>
        <div>
          <input
            type='text'
            placeholder='username'
            value={this.state.userName}
            autoComplete='off'
            onChange={this.handleUserNameChange.bind(this)} />
        </div>
        <div>
          <input
            type='password'
            placeholder='password'
            value={this.state.password}
            autoComplete='off'
            onChange={this.handlePasswordChange.bind(this)} />
        </div>
        <div>
          <input
            type='submit'
            value='login'
            onSubmit={this.handleSubmit} />
        </div>
      </form>
    )
  }
}

export default Login