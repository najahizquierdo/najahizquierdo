import React, { Component } from 'react';
import './App.css';
import Portfolio from './Portfolio.js'
import { Button, Card, row, col } from 'react-materialize';
import Projects from './ProjectsComponent.js'
import {BrowserRouter, Route, Router, Redirect} from 'react-router-dom';
import Illustrations from './IllustrationComponent.js'
import Sidebar from './SideNavBarComponent.js'
import Flyers from './FlyersComponent.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <div className="App">

      </div>
      <Sidebar />

        <Route exact path='/' component={Portfolio} />
        <Route path='/projects' component={Projects}/>
        <Route path='/illustrations' component={Illustrations}/>
        <Route path='/flyers' component={Flyers}/>
    </div>
  </BrowserRouter>
    );
  }
}

export default App;
