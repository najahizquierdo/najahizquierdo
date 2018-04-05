import React, { Component } from 'react';
import bsp from './pictures/bsp2.png'
import Slider from 'react-slick'
import BspComp from './BlazingStonePizza.js'
import bsp1 from './pictures/bsp2.png'
class Projects extends Component {
  render() {
    return (
      <div>
        <h2> <center>Projects </center></h2>
        <div className="container">
        <img src={bsp1} className="image" />
        <div className="middle">
          <div className="text">
            <h6> BSP</h6>
            <p>
              2018
            </p>
              <p>
                <a href="/bsp">Check it out!</a>
              </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Projects;
