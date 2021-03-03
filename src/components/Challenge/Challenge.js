import axios from 'axios';
import React, { Component } from 'react';
import './challenge.scss';
import Detail from '../Detail/Detail';
import Loading from '../Loading/Loading';
import NetworkError from '../../Network/Index';

class Challenge extends Component {
  state = {
    error: null,
    isLoaded: false,
    challenges: [],
  }

  componentDidMount = () => {
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

  render() {
    const { error, isLoaded, challenges } = this.state;

    if (error) {
      return <NetworkError />
    }

    if (!isLoaded) {
      return <Loading />
    }

    return (
      <>
        <p className='challengeLength'>{this.state.challenges.length} Challenges</p>
        <div className='challengeContainer'>
          {challenges.map(challenge => (
            <Detail key={challenge.id} detail={challenge} type='challenge' />
          ))}
        </div>
      </>
    )
  }
}

export default Challenge;