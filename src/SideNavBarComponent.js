import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import name from './pictures/name-tag.png'
class Sidebar extends Component {
  render() {

    return(
    <div>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Projects</a> </li>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="/bsp">BLAZING STONE PIZZA</a></li>
          <li className="divider"></li>
        </ul>
      <li>  <a className="dropdown-button" href="#!" data-activates="dropdown2">Graphic Designs</a>
        <ul id="dropdown2" className="dropdown-content">
          <li><a href="/illustrations">ILLUSTRATIONS</a></li>
        </ul>
      </li>
        <li><a href="/mixes">MIXES</a></li>
        <li><a href="/moments">PHOTOGRAPHY</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>

    );
  }
}
export default Sidebar;
