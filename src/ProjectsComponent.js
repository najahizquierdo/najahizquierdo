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
               <div class="pictures block">
                <Slider {...settings}>
                  <img src= {runcandyrun} className="grey" />
                  <img src= {clientproject} className="grey" />
                  <img src= {imdbclone} className="grey" />
                </Slider>
              </div>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default Projects;
