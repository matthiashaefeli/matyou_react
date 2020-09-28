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

    let div
    if (error) {
      div = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      div = <div>Loading data .....</div>
    } else {
      div = <div className='challengeContainer'>
        {challenges.map(challenge => (
          <Detail key={challenge.id} detail={challenge} />
        ))}
      </div>
    }

    return (
      <article className='challengeHome'>
        <a href='/' className='backLink'><i class="fas fa-arrow-left"></i></a>
        <Title title={this.titleText} color={'black'} />
        {div}
      </article>
    )
  }
}

export default Index;