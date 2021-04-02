import React, { Component } from 'react';
import Home from '../Home/Home';
import Blog from '../Blog/Index';
import Note from '../Note/Index';
import Challenge from '../Challenge/Index';
import About from '../About/Index';
import Comment from '../Comment/Index';
import Book from '../Book/Index';
import Error from '../Error/Error';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/note' component={Note} />
        <Route exact path='/challenge' component={Challenge} />
        <Route exact path='/about' component={About} />
        <Route exact path='/book' component={Book} />
        <Route exact path='/comment' component={Comment} />
        <Route component={Error} />
      </Switch>
    )
  }
}

export default App;