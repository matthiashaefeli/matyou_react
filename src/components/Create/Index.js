import React, { Component } from 'react';
import Back from '../Back/Back';
import './create.scss';
import Title from '../Title/Title';
import CreateForm from './CreateForm';
import CreateFormAttachment from './CreateFormAttachment';

export default class Index extends Component {
  titleText = 'Create'

  render() {
    return (
      <article className='createHome'>
        <Back />
        <Title title={this.titleText} color={'black'} />
        <CreateForm title='Blog' type='blog' sendUrl='https://matyou-api.herokuapp.com/blog' />
        <CreateForm title='Challenge' type='challenge' sendUrl='https://matyou-api.herokuapp.com/challenge' />
        <CreateFormAttachment />
      </article>
    )
  }
}
