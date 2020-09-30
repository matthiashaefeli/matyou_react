import React, { Component } from 'react';
import Cookie from 'js-cookie';
import './back.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSignOutAlt, faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default class Back extends Component {
  state = {
    authorized: Cookie.get('authorized')
  }

  signOut(e) {
    e.preventDefault();
    Cookie.remove('authorized');
    Cookie.remove('token');
    this.setState({
      authorized: false
    })
  }

  render() {
    let createlink
    if (Cookie.get('authorized')) {
      createlink = <>
        <a href='/create'><FontAwesomeIcon icon={faPlusCircle} /></a>
        <a href='/' onClick={this.signOut.bind(this)}><FontAwesomeIcon icon={faSignOutAlt} /></a>
      </>
    } else {
      createlink = null
    }

    return (
      <div className='links'>
        <a href='/'><FontAwesomeIcon icon={faHome} /></a>
        {createlink}
      </div>
    )
  }
}
