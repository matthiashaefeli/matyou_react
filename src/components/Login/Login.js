import axios from 'axios';
import Cookie from 'js-cookie';
import React, { Component } from 'react';
import Back from '../Back/Back';
import './login.scss';

class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://matyou-api.herokuapp.com/signin', {
      "email": this.state.userName,
      "password": this.state.password
    }).then(result => {
      Cookie.set('token', result.data.token, { expires: 1 })
      Cookie.set('authorized', true, { expires: 1 })
      this.setState({
        userName: '',
        password: '',
        logedIn: true
      })
    }, error => {
      console.log(error)
    })
  }

  render() {
    if (!Cookie.get('authorized')) {
      return (
        <div>
          <Back />
          <form className='loginForm'>
            <div>
              <input
                type='text'
                placeholder='username'
                value={this.state.userName}
                autoComplete='off'
                onChange={this.handleChange.bind(this)} />
            </div>
            <div>
              <input
                type='password'
                placeholder='password'
                value={this.state.password}
                autoComplete='off'
                onChange={this.handleChange.bind(this)} />
            </div>
            <div>
              <input
                type='submit'
                value='login'
                onClick={this.handleSubmit.bind(this)} />
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <Back />
        </div>
      )
    }

  }
}

export default Login