import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import Projects from './ProjectsComponent.js'
import name from './pictures/name-tag.png'
import fb from './pictures/fb.png'
import insta from './pictures/insta.png'
import linkedin from './pictures/linkedin.png'
import sc from './pictures/sc.png'


class Portfolio extends Component {
  render() {
    return(
  <div className="row about-me">
    <img src={name} className="block" />
    <div className="icon-container">
    <a href="https://www.facebook.com/najonaslover">
      <img src={fb} className="icon" />
    </a>
    <a href="https://soundcloud.com/nastyynajj">
      <img src={sc} className="icon" />
    </a>
    <a href="https://www.linkedin.com/in/najah-izquierdo-801955138/">
     <img src={linkedin} className="icon" />
   </a>
    <a href="https://www.instagram.com/nastyynaj">
      <img src={insta} className="icon" />
    </a>
  </div>
  </div>
    );
  }
}
export default Portfolio;
