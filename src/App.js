import React, { Component } from 'react';
import './App.css';
import Portfolio from './Portfolio.js'
import { Button, Card, row, col } from 'react-materialize';
import Projects from './ProjectsComponent.js'
import {BrowserRouter, Route, Router, Redirect} from 'react-router-dom';
import Illustrations from './IllustrationComponent.js'
import Sidebar from './SideNavBarComponent.js'
import Moments from './FlyersComponent.js'
import Music from './Music.js'
import Bsp from './BlazingStonePizza.js'
import AboutMe from './AboutComponent.js'
import Contact from './Contact.js'
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
        <Route path='/moments' component={Moments}/>
        <Route path='/bsp' component={Bsp} />
        <Route path='/mixes' component={Music} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={AboutMe} />
    </div>
  </BrowserRouter>
    );
  }
}

export default App;
