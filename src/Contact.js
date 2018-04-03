import React, { Component } from 'react';
import Slider from 'react-slick'
import resume from './pictures/resume.png'
import linked from './pictures/linkedin.png'
import github from './pictures/github.png'

class Contact extends Component {
  render() {
    return (
      <div className="pages">
        <div className="row">
          <img src={resume} className="column1" />
        <div className="column2">
          <center><h2>Contact </h2>
          <p>
            najahizquierdo@gmail.com
            <p>
              www.najahizquierdo.com
            </p>

          </p>
          <a href="http://www.linkedin.com/in/najah-izquierdo-801955138/">
          <img src={linked} className="contact-icon" />
        </a>
        <a href="http://www.github.com/najahizquierdo/">
        <img src={github} className="github-icon" />
      </a>
    </center>
  </div>
        </div>
      </div>
    );
  }
}

export default Contact;
