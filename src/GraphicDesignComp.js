import React, { Component } from 'react';
import Slider from 'react-slick'
import hugo from './pictures/huvs.png';
import snapchat from './pictures/snapchat-graphic.png'
class GraphicDesign extends Component {
  render() {
    return (
      <div>
        <div className="graphic">
          <a href="/illustrations">
          <img src={hugo} className="graphic-design-page" />
        </a>
          <div class="text-block">
            <h6><a href="/illustrations"> Adobe Illustrator</a></h6>
          </div>
    </div>
      <div className="graphic">
        <a href="/illustrations">
        <img src={snapchat} className="graphic-design-page" />
        </a>
        <div class="text-block">
          <h6><a href="/photoshop"> Photoshop</a></h6>
        </div>
    </div>
  </div>
    );
  }
}

export default GraphicDesign;
