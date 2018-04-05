import React, { Component } from 'react';
import bsp from './pictures/bsp2.png'
import Slider from 'react-slick'
import bsp1 from './pictures/bsp-1.png'
import bsp2 from './pictures/bsp-2.png'
import bsp3 from './pictures/bsp-3.png'

class BlazingStonePizza extends Component {
  render() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      <div className="pages">
        <div className="project-info">
        <center>

          <h1> Blazing Stone Pizza </h1>
        </center>
            <center>
            Blazing Stone Pizza is a hip, well-reviewed pizza joint in Los Angeles, California.
            With a 4.5 star rating and over 250 reviews, they needed a website that was fun but still professional.
            I decided to start from scratch and recreate their entire website using React, HTML, and CSS.
            <p> <a href="https://www.blazingstonepizza.com"> Check it out here!</a> </p>
            <center>
              <h5> Technologies </h5>
              ReactJS | HTML | CSS
              <p>Menu and Flyers created on Adobe Photoshop</p>
            </center>
            <img src= {bsp} className="pictures" />
          <h2> The Process </h2>
            <center> <p>
              My client wanted a simple, clean design. They provided me with their desired components and left the rest up to me.
              I decided this website didn't need a backend, since the POS was created on a separate software. I decided to use
              a React frontend and utilized React Router in order to create tabs. This website is both mobile and desktop compatible.
            </p> </center>
              <p>
                Here are some of the wireframes I created using Mockflow.com:
              </p>
                <img src= {bsp2} className="wireframing" />
                <img src= {bsp3} className="wireframing" />
                <hr />
              </center>
            </div>
          </div>
    );
  }
}

export default BlazingStonePizza;
