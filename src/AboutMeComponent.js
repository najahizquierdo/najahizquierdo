import React, { Component } from 'react';
import pic from './pictures/pic.jpg'
import icons from './pictures/icons-portfolio.png'
import { Button, Card, Row, Col } from 'react-materialize';

class AboutMe extends Component {
  render() {
    return(
     <div className="col s12 m5 l3">
       <div className="card-panel pink lighten-5">
         <div className="pictures">
           <center>
             <img src={pic} width="250"/>
           </center>
            <center>
              <img src={icons} className="social-icons" width="250" usemap="#image-map"/>
              <map name="image-map">
                <area href="https://github.com/najahizquierdo" coords="48,50,39" shape="circle" />
                <area href="https://www.linkedin.com/in/najah-izquierdo-801955138/" coords="125,51,37" shape="circle" />
                <area href="./pictures/najah-izquierdo-resume.png" download coords="202,49,38" shape="circle" />
              </map>
              <p>
                My name is Najah Izquierdo.
                I am a 21 year old web developer,
                currently studying computer science at San Jose State.
                I am currently located in the South Bay!
              </p>
            </center>
          </div>
        </div>
      </div>

    );
  }
}
export default AboutMe;
