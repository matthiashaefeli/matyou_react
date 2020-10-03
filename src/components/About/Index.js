import React, { Component } from 'react'
import Cookie from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import Title from '../Title/Title';
import Back from '../Back/Back';
import './about.scss'

class Index extends Component {
  state = {
    authorized: Cookie.get('authorized')
  }

  titleText = "Hi! I'm Mat"

  render() {
    let signout
    if (!this.state.authorized) {
      signout = <div className='loginLink'>
        <a href='/login'><FontAwesomeIcon icon={faSignInAlt} /></a>
      </div>
    } else {
      signout = null
    }

    return (
      <article className='aboutHome'>
        {signout}
        <Back />
        <Title title={this.titleText} color={'black'} />
        <div className='aboutText'>
          This is my notebook. I'm working as a Software Engineer @ GraceHill and here is my journey.
          If I struggle with something or learn something new,I write it down here.
          My Blog is the result of a little bit more research.
          The good to know stuff is a reminder of stuff that I'm using and I do not remember how.
          And finally my Coding Challenges. On my journey to learn to code I used a lot of different challenges, and here are some of them.
          HAVE FUN!
        </div>
        <div className='aboutLinks'>
          <a href='https://github.com/matthiashaefeli' target='_blank' rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.linkedin.com/in/matthias-haefeli/' target='_blank' rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </article>
    )
  }
}

export default Index;