import React, { Component } from 'react';
import Slider from 'react-slick'


class Photography extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const images = [
      { path: require('./pictures/kaiya.png'), alt:'Kaiya, 35mm Film, 2018'},
      { path: require('./pictures/brock.JPG'), alt:'Brockhampton, 2018'},
      { path: require('./pictures/hen-4.JPG'), alt:'RL Grime at Ultra, 2018'},
      { path: require('./pictures/nyc.jpg'), alt:'The L, 2018'}
    ];
    return (
      <div className="pages">
        <center>
          <h2>Photos </h2>
        <div className="moments"> IPHONE, FILM, DARKROOM </div>
        {images.map(function(imageProps) {

        return (
          <div>
            <img src={imageProps.path} alt={imageProps.alt} className="moments-images"/>
            <span className="pic-text"> {imageProps.alt} </span>
          </div>
        );

      })}
      </center>
    </div>
    );
  }
}

export default Photography;
