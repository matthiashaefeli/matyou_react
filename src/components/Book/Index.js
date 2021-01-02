import axios from 'axios';
import React, { Component } from 'react';
import './book.scss';
import Title from '../Title/Title';
import BookDetail from '../Detail/BookDetail';
import Back from '../Back/Back';
import Loading from '../Loading/Loading';
import NetworkError from '../../Network/Index';

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    books: [],
  }

  componentDidMount = () => {
    axios.get('https://matyou-api.herokuapp.com/books')
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

  titleText = "I really try to read a book sometimes. Here are all of the books I've read with some notes."

  render() {
    const { error, isLoaded, books } = this.state;

    let div
    if (error) {
      div = <NetworkError />
    } else if (!isLoaded) {
      div = <Loading />
    } else {
      div = <div className='bookContainer'>
              {books.map(book => (
                <BookDetail key={book.id} detail={book} type='book' />
              ))}
            </div>
    }

    return (
      <article className='bookHome'>
        <Back />
        <Title title={this.titleText} color={'black'} />
        <p className='bookLength'>{this.state.books.length} Books</p>
        {div}
      </article>
    )
  }
}

export default Index;