import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import name from './pictures/name-tag.png'
class Sidebar extends Component {
  render() {

    return(

      <div class="sidenav">
        <a href="/">Home</a>
        <a className="dropdown-button" href="#!" data-activates="dropdown1">Projects</a>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="/projects">Blazing Stone Pizza</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <a className="dropdown-button" href="#!" data-activates="dropdown2">Graphic Designs</a>
        <ul id="dropdown2" className="dropdown-content">
          <li><a href="/illustrations">Illustrations</a></li>
          <li><a href="/flyers">Flyers</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <a href="/contact">Contact</a>
        <a href="#contact">Search</a>
      </div>

    );
  }
}
export default Sidebar;
