import React, { Component } from 'react';
import Slider from 'react-slick'
import hugo from './pictures/huvs.png';
import collage from './pictures/unnamed.jpg';
import bsp from './pictures/bsp_postcard.png';
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
   <div className="container">
  <img src={collage} className="image"/>
<div className="middle">
  <div className="text">
    <h6>Mood Collage</h6>
    <p>
      Collage
    </p>
    <p>
      Over and Procreate
    </p>
      <p>
        2020
      </p>

  </div>
</div>
<img src={bsp} className="image"/>
<div className="middle">
<div className="text">
  <h6>BSP postcard</h6>
  <p>
    Adobe Illustrator
  </p>
    <p>
      2020
    </p>

</div>
</div>
</div>
       </div>
    );
  }
}

export default GraphicDesign;
