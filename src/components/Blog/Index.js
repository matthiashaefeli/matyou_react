import axios from 'axios';
import React, { Component } from 'react';
import './blog.scss';
import Title from '../Title/Title';
import Detail from '../Detail/Detail';
import Back from '../Back/Back';

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
    let div

    if (error) {
      div = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      div = <div>Loading data .....</div>
    } else {
      div = <div className='blogContainer'>
        {blogs.map(blog => (
          <Detail key={blog.id} detail={blog} type='blog' />
        ))}
      </div>
    }

    return (
      <article className='blogHome'>
        <Back />
        <Title title={this.titleText} color={'white'} />
        {div}
      </article>
    )
  }
}

export default Index;