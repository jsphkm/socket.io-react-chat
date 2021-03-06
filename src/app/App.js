import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from '../landing-page/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
