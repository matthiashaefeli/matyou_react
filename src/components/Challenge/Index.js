import React, { Component } from 'react';
import Title from '../Title/Title';
import './challenge.scss';

class Index extends Component {
  titletext = "Challenge page"

  render() {
    return (
      <article className='challengeHome'>
        <Title title={this.titletext} color={'black'} />
      </article>
    )
  }
}

export default Index;