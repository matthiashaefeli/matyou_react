import axios from 'axios';
import React, { Component } from 'react';
import './note.scss';
import Title from '../Title/Title';
import DetailSimple from '../Detail/DetailSimple';
import Back from '../Back/Back';
import Loading from '../Loading/Loading';
import NetworkError from '../../Network/Index';

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    notes: [],
    searchText: '',
    noteCount: 0
  }

  componentDidMount = () => {
    axios.get('https://matyou-api.herokuapp.com/note')
      .then(
        result => {
          this.setState({
            isLoaded: true,
            notes: result.data,
            noteCount: result.data.length
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

  handleSearch = (e) => {
    let filteredNotes
    filteredNotes = this.state.notes
                                .filter(note => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
    console.log(e.target.value)
    this.setState({
      searchText: e.target.value,
      noteCount: filteredNotes.length
    })
  }

  render() {
    const { error, isLoaded, notes, noteCount } = this.state;

    let div
    if (error) {
      div = <NetworkError />
    } else if (!isLoaded) {
      div = <Loading />
    } else {
      div = <div className='noteContainer'>
              {notes
                .filter(note => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
                .map(note => (
                  <DetailSimple key={note.id} detail={note} />
                ))}
            </div>
    }

    return (
      <article className='noteHome'>
        <Back />
        <Title title={this.titleText} color={'black'} />
        <div className='searchTextInput'>
          <input
            type='text'
            value={this.state.searchText}
            onChange={this.handleSearch.bind(this)}
            placeholder='Search....'
          />
          <p>{noteCount} Notes</p>
        </div>
        {div}
      </article>
    )
  }
}

export default Index;

