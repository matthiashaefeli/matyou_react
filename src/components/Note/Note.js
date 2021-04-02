import axios from 'axios';
import React, { Component } from 'react';
import './note.scss';
import DetailSimple from '../Detail/DetailSimple';
import Loading from '../Loading/Loading';
import NetworkError from '../../Network/Index';

class componentName extends Component {
  state = {
    error: null,
    isLoaded: false,
    notes: [],
    searchText: '',
    noteCount: 0
  }

  componentDidMount = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/notes')
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

    if (error) {
      return <NetworkError />
    }

    if (!isLoaded) {
      return <Loading />
    }
    return (
      <>
        <div className='searchTextInput'>
          <input
            type='text'
            value={this.state.searchText}
            onChange={this.handleSearch.bind(this)}
            placeholder='Search....'
          />
          <p className='noteLength'>{noteCount} Notes</p>
        </div>
        <div className='noteContainer'>
          {notes
            .filter(note => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
            .map(note => (
              <DetailSimple key={note.id} detail={note} />
            ))}
        </div>
      </>
    )
  }
}

export default componentName;