import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import IdeaPage from './components/IdeaPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/login' component={LogInPage}/>
            <Route path='/user/:userId' component={IdeaPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
