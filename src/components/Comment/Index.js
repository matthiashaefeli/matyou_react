import React, { Component } from 'react';
import axios from 'axios';
import './comment.scss';
import Back from '../Back/Back';
import Loading from '../Loading/Loading';
import NetworkError from '../../Network/Index';
import Comment from './Comment';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      book: {},
      error: ''
    }
  }

  componentDidMount = () => {
    axios.get(`https://matyou-api.herokuapp.com/book/${this.props.location.state.id}`)
      .then(
        result => {
          this.setState({
            isLoaded: true,
            book: result.data
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
    const { error, isLoaded } = this.state
    const { title, author, url, comments } = this.state.book

    let sectionStyle = {
      backgroundImage: `url(${url})`,
      width: '11em',
      height: '17em',
      cursor: 'pointer',
      margin: '10px',
      color: 'black',
    }

    let div
    if (error) {
      div = <NetworkError />
    } else if (!isLoaded) {
      div = <Loading />
    } else {
      div = <div className='commentContainer'>
              <div className='commentImage'><img src={url} alt={title} style={sectionStyle} /></div>
              <div className='commentText'>
                <p><b>Title: {title}</b></p>
                <p><b>Author: {author}</b></p>
                <p><b>Notes: </b></p>
                <ul>
                  <b>
                  {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} type='comment' />
                  ))}
                  </b>
                </ul>
              </div>
            </div>
    }

    return (
      <article className='commentHome'>
        <Back />
        {div}
      </article>
    )
  }
}

export default Index;