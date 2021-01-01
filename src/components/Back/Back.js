import React, { Component } from 'react';
import Cookie from 'js-cookie';
import './back.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,
         faSignOutAlt,
         faHome,
         faBookOpen,
         faBook,
         faStickyNote,
         faGrimace,
         faGlasses } from '@fortawesome/free-solid-svg-icons'

export default class Back extends Component {
  state = {
    authorized: Cookie.get('authorized')
  }

  signOut = (e) => {
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
        <a href='/'><FontAwesomeIcon icon={faHome} />
          <span className='fontLink'> Home</span>
        </a>
        <a href='/challenge'><FontAwesomeIcon icon={faGlasses} />
          <span className='fontLink'> Challenge</span>
        </a>
        <a href='/note'><FontAwesomeIcon icon={faStickyNote} />
          <span className='fontLink'> Notes</span>
        </a>
        <a href='/book'><FontAwesomeIcon icon={faBookOpen} />
          <span className='fontLink'> Books</span>
        </a>
        <a href='/blog'><FontAwesomeIcon icon={faBook} />
          <span className='fontLink'> Blog</span>
        </a>
        <a href='/about'><FontAwesomeIcon icon={faGrimace} />
          <span className='fontLink'> About</span>
        </a>
        {createlink}
      </div>
    )
  }
}
