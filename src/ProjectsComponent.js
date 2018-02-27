import React, { Component } from 'react';
import runcandyrun from './pictures/runcandyrun.png'
import clientproject from './pictures/clientproject.png'
import imdbclone from './pictures/imdbclone.png'
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
            PROJECTS
             <div className="card-panel lit pink lighten-5">
                <Slider {...settings}>
                  <img src= {runcandyrun} className="pictures block grey" />
                  <img src= {clientproject} className="pictures block grey" />
                  <img src= {imdbclone} className="pictures block grey" />
                </Slider>
              </div>
            </div>
        </p>
      </div>
    );
  }
}

export default Projects;
