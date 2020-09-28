import axios from 'axios';
import React, { Component } from 'react';
import './blog.scss';
import Title from '../Title/Title';
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

  titleText = "I've read a lot of blogs but I don't have a favorite. Sometimes I bookmark a good blog, but if I need it again I certainly won't find it. Writing a blog and doing more research on something helps me to better understand and learn. This section is a mix of Blogs, Tutorials, and Information."

  render() {
    const { error, isLoaded, blogs } = this.state;

    if (error) {
      return (
        <article className='blogHome'>
          <Title title={this.titleText} color={'white'} />
          <div>Error: {error.message}</div>
        </article>
      )
    } else if (!isLoaded) {
      return (
        <article className='blogHome'>
          <Title title={this.titleText} color={'white'} />
          <div>Loading data .....</div>
        </article>
      )
    } else {
      return (
        <article className='blogHome'>
          <Title title={this.titleText} color={'white'} />
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