import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import name from './pictures/name-tag.png'
class Sidebar extends Component {
  render() {

    return(
    <div>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Web Dev</a></li>
        <li><a href="/graphicdesign">graphic design</a></li>
        {/* <li><a href="/mixes">MIXES</a></li> */}
        <li><a href="/moments">PHOTOGRAPHY</a></li>
        <li><a href="/videos">VIDEOS</a></li>
      </ul>
    </div>

    );
  }
}
export default Sidebar;
