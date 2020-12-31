import React, { Component } from 'react';
import './index.scss';
import Blog from './Blog';
import Challenge from './Challenge';
import Book from './Book';
import Note from './Note';

export default class Index extends Component {
  render() {
    return (
      <section className='container'>
        <section className='innerContainer'>
          <Blog />
          <Note />
        </section>
        <section className='innerContainer'>
          <Challenge />
          <Book />
        </section>
      </section>
    )
  }
}
