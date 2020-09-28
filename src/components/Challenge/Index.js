import axios from 'axios';
import React, { Component } from 'react';
import './challenge.scss';
import Title from '../Title/Title';
import Detail from '../Detail/Detail';

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    challenges: [],
  }

  componentDidMount() {
    axios.get('https://matyou-api.herokuapp.com/challenge')
      .then(
        result => {
          this.setState({
            isLoaded: true,
            challenges: result.data
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

  titleText = "On my journey to learn to code I used a lot of different challenges. Here are some Ruby and Javascript challenges. Have fun!"


  render() {
    const { error, isLoaded, challenges } = this.state;

    if (error) {
      return (
        <article className='challengeHome'>
          <Title title={this.titleText} color={'black'} />
          <div>Error: {error.message}</div>
        </article>
      )
    } else if (!isLoaded) {
      return (
        <article className='challengeHome'>
          <Title title={this.titleText} color={'black'} />
          <div>Loading data .....</div>
        </article>
      )
    } else {
      return (
        <article className='challengeHome'>
          <Title title={this.titleText} color={'black'} />
          <div className='challengeContainer'>
            {challenges.map(challenge => (
              <Detail key={challenge.id} detail={challenge} />
            ))}
          </div>
        </article>
      )
    }
  }
}

export default Index;