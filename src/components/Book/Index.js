import React, { Component } from 'react';
import './book.scss';
import Title from '../Title/Title';
import Back from '../Back/Back';
import Book from './Book';

class Index extends Component {
  render() {
    const titleText = "I really try to read a book sometimes. Here are all of the books I've read with some notes."

    return (
      <article className='bookHome'>
        <Back />
        <Title title={titleText} color={'black'} />
        <Book />
      </article>
    )
  }
}

export default Index;