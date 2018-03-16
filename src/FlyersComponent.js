import React, { Component } from 'react';
import bsp from './pictures/bsp2.png'
import Slider from 'react-slick'
import flyer1 from './pictures/flyer1.png'
class Flyers extends Component {
  render() {
    return (
      <div>
        <img src={flyer1} className="flyers" />
      </div>
    );
  }
}

export default Flyers;
