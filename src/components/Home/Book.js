import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <article className='innerFlex bookLink'>
        <a href='/book' className='links'>BOOKS</a>
      </article>
    )
  }
}

export default Book;