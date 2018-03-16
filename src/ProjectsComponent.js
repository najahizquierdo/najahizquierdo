import React, { Component } from 'react';
import bsp from './pictures/bsp2.png'
import Slider from 'react-slick'
class Projects extends Component {
  render() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    return (
      <div>
        <p>
          <div className="col s12 m5 l3">
            <h1> Blazing Stone Pizza </h1>
                  <img src= {bsp} className="pictures" />
            </div>
        </p>
      </div>
    );
  }
}

export default Projects;
