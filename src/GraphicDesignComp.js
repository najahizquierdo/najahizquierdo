import React, { Component } from 'react';
import Slider from 'react-slick'
import hugo from './pictures/huvs.png';
import snapchat from './pictures/snapchat-graphic.jpg'
class GraphicDesign extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src={hugo} className="image" />
        <div className="middle">
          <div className="text">
            <h6><a href="/illustrations"> Adobe Illustrator</a></h6>
          </div>
        </div>
      </div>
        <img src={snapchat} className="image" />
      </div>
    );
  }
}

export default GraphicDesign;
