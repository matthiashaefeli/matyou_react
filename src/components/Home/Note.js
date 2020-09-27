import React, { Component } from 'react'

export default class Note extends Component {
  render() {
    return (
      <article className='innerFlex noteLink'>
        <a href='/note' className='links'>GOOD TO KNOW</a>
      </article>
    )
  }
}
