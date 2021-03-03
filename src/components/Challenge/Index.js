import React, { Component } from 'react';
import './challenge.scss';
import Title from '../Title/Title';
import Back from '../Back/Back';
import Challenge from './Challenge';

class Index extends Component {
  render() {
    const titleText = "On my journey to learn to code I used a lot of different challenges. Here are some Ruby and Javascript challenges. Have fun!"

    return (
      <article className='challengeHome'>
        <Back />
        <Title title={titleText} color={'black'} />
        <Challenge />
      </article>
    )
  }
}

export default Index;

