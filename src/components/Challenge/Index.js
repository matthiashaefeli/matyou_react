import axios from 'axios';
import React, { Component } from 'react';
import './challenge.scss';
import Title from '../Title/Title';
import Detail from '../Detail/Detail';
import Back from '../Back/Back';
import Loading from '../Loading/Loading';
import NetworkError from '../../Network/Index';

class Index extends Component {
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

  titleText = "On my journey to learn to code I used a lot of different challenges. Here are some Ruby and Javascript challenges. Have fun!"

  render() {
    const { error, isLoaded, challenges } = this.state;

    let div
    if (error) {
      div = <NetworkError />
    } else if (!isLoaded) {
      div = <Loading />
    } else {
      div = <div className='challengeContainer'>
              {challenges.map(challenge => (
                <Detail key={challenge.id} detail={challenge} type='challenge' />
              ))}
            </div>
    }

    return (
      <article className='challengeHome'>
        <Back />
        <Title title={this.titleText} color={'black'} />
        <p className='challengeLength'>{this.state.challenges.length} Challenges</p>
        {div}
      </article>
    )
  }
}

export default Index;

