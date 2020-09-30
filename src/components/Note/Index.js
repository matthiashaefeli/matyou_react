import axios from 'axios';
import React, { Component } from 'react';
import './note.scss';
import Title from '../Title/Title';
import Detail from '../Detail/Detail';
import Back from '../Back/Back';

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    notes: [],
  }

  componentDidMount() {
    axios.get('https://matyou-api.herokuapp.com/note')
      .then(
        result => {
          this.setState({
            isLoaded: true,
            notes: result.data
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

  titleText = "Learning something new is a good feeling, not remembering it afterwards is not a good feeling. You know that you've seen it before and you google it over and over again. I write it down for myself and save it here. These are all my little notes."

  render() {
    const { error, isLoaded, notes } = this.state;

    let div
    if (error) {
      div = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      div = <div>Loading data .....</div>
    } else {
      div = <div className='noteContainer'>
        {notes.map(note => (
          <Detail key={note.id} detail={note} />
        ))}
      </div>
    }

    return (
      <article className='noteHome'>
        <Back />
        <Title title={this.titleText} color={'black'} />
        {div}
      </article>
    )
  }
}

export default Index;

