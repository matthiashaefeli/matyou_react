import React, { Component } from 'react';
import Home from '../Home/Home';
import Blog from '../Blog/Index';
import Note from '../Note/Index';
import Challenge from '../Challenge/Index';
import About from '../About/Index';
import Error from '../Error/Error';
import Login from '../Login/Login';
import Create from '../Create/Index';
import { Route, Switch } from 'react-router-dom';
import Cookie from 'js-cookie';

class App extends Component {
  state = {

  }

  render() {
    let route
    if (Cookie.get('token')) {
      route = <Route exact path='/create' component={Create} />
    } else {
      route = null
    }

    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/note' component={Note} />
        <Route exact path='/challenge' component={Challenge} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        {route}
        <Route component={Error} />
      </Switch>
    )
  }
}

export default App;