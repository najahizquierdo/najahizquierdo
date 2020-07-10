import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import Projects from './ProjectsComponent.js'
import name from './pictures/name-tag.png'
import fb from './pictures/fb.png'
import insta from './pictures/insta.png'
import linkedin from './pictures/linkedin.png'
import sc from './pictures/sc.png'
import twitter from './pictures/twitter.png'


class Portfolio extends Component {
  render() {
    return(
  <div className="about-me">
    <img src={name} className="block" />
  </div>
    );
  }
}
export default Portfolio;
