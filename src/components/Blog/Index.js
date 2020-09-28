import axios from 'axios';
import React, { Component } from 'react';
import './blog.scss';
import Title from './Title';
import Blog from './Blog';

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    blogs: [],
  }

  componentDidMount() {
    axios.get('https://matyou-api.herokuapp.com/blog')
      .then(
        result => {
          this.setState({
            isLoaded: true,
            blogs: result.data
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
    const { error, isLoaded, blogs } = this.state;

    if (error) {
      return (
        <article className='blogHome'>
          <Title />
          <div>Error: {error.message}</div>
        </article>
      )
    } else if (!isLoaded) {
      return (
        <article className='blogHome'>
          <Title />
          <div>Loading data .....</div>
        </article>
      )
    } else {
      return (
        <article className='blogHome'>
          <Title />
          <div className='blogContainer'>
            {blogs.map(blog => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
        </article>
      )
    }
  }
}

export default Index;