import React, { Component } from 'react';
import './App.css';
import nametag from './pictures/name-tag.png'
import Socials from './socials.js'
import Portfolio from './Portfolio.js'
import { Button, Card, row, col } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={nametag} className="App-logo" alt="logo" />
      </header>
      </div>

        <Portfolio />

    </div>
    );
  }
}

export default App;
