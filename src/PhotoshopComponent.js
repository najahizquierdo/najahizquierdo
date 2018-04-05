import React, { Component } from 'react';
import bsp from './pictures/bsp2.png'
import Slider from 'react-slick'
import snapchat from './pictures/snapchat.jpg'
import bspflyer from './pictures/flyer1.png'


class Projects extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <img src={snapchat} className="image" />
        <div className="middle">
          <div className="text">
            <h6> Snapchat geofilter</h6>
            <p>
              2018
            </p>
              <p>
                Photoshop
              </p>
              <p>
              inspired by Star Wars: The Empire Strikes Back.
              </p>

          </div>
        </div>
      </div>
      <div className="container">
      <p><img src={bspflyer} className="image" /></p>
      <div className="middle">
        <div className="text">
          <h6> Self Defense Seminar</h6>
          <p>
            2018
          </p>
            <p>
              Photoshop
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Projects;
