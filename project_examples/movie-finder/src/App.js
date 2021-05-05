import './App.css';
import React, {Component} from 'react';

import {Detail} from './pages/Detail'
import 'bulma/css/bulma.css'
import Home from './pages/Home'
import {NotFound} from './pages/NotFound'

import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
      return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/detail/:id' component={Detail}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    );
  }
}

export default App;

 