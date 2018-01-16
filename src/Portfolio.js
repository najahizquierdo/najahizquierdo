import React, { Component } from 'react';
import pic from './pictures/pic.jpg'
import icons from './pictures/icons-portfolio.png'
import { Button, Card, Row, Col } from 'react-materialize';
import Projects from './ProjectsComponent.js'
import AboutMe from './AboutMeComponent.js'


class Portfolio extends Component {
  render() {
    return(
  <div className="row about-me">
    <AboutMe />
    <Projects />
  </div>
    );
  }
}
export default Portfolio;
