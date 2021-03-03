import axios from 'axios';
import React, { Component } from 'react';
import './book.scss';
import BookDetail from '../Detail/BookDetail';
import Loading from '../Loading/Loading';
import NetworkError from '../../Network/Index';

class Book extends Component {
  state = {
    error: null,
    isLoaded: false,
    books: [],
  }

  componentDidMount = () => {
    axios.get('https://matyou-api.herokuapp.com/book')
      .then(
        result => {
          this.setState({
            isLoaded: true,
            books: result.data
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, books } = this.state;

    if (error) {
      return <NetworkError />
    }

    if (!isLoaded) {
      return <Loading />
    }

    return  (
      <>
        <p className='bookLength'>{this.state.books.length} Books</p>
        <div className='bookContainer'>
          {books.map(book => (
            <BookDetail key={book.id} detail={book} type='book' />
          ))}
        </div>
      </>
    )
  }
}

export default Book;