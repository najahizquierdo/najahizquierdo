import React, { Component } from 'react';
import Slider from 'react-slick'
import hugo from './pictures/huvs.png';
import snapchat from './pictures/snapchat-graphic.png'
class GraphicDesign extends Component {
  render() {
    return (
      <div>
        <div className="container">
    <img src={hugo} className="image"/>
  <div className="middle">
    <div className="text">
      <h6>Pizza Bro</h6>
      <p>
        Portrait
      </p>
      <p>
        Adobe Illustrator
      </p>
        <p>
          2018
        </p>

    </div>
  </div>
</div>
       </div>
    );
  }
}

export default GraphicDesign;
