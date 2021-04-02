import axios from 'axios';
import React, { Component } from 'react';
import './blog.scss';
import Detail from '../Detail/Detail';
import Loading from '../Loading/Loading';
import NetworkError from '../../Network/Index';

class Blog extends Component {
  state = {
    error: null,
    isLoaded: false,
    blogs: [],
  }

  componentDidMount = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/blogs')
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
      return <NetworkError />
    }

    if (!isLoaded) {
      return <Loading />
    }

    return (
      <>
        <p className='blogLength'>{this.state.blogs.length} Blogs</p>
        <div className='blogContainer'>
          {blogs.map(blog => (
            <Detail key={blog.id} detail={blog} type='blog' />
          ))}
        </div>
      </>
    );
  }
}

export default Blog;
