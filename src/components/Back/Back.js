import React, { Component } from 'react';
import './back.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,
         faBookOpen,
         faBlog,
         faStickyNote,
         faGrimace,
         faGlasses } from '@fortawesome/free-solid-svg-icons'

export default class Back extends Component {
  render() {
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
        <a href='/blog'><FontAwesomeIcon icon={faBlog} />
          <span className='fontLink'> Blog</span>
        </a>
        <a href='/about'><FontAwesomeIcon icon={faGrimace} />
          <span className='fontLink'> About</span>
        </a>
      </div>
    )
  }
}
