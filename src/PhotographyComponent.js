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
      { path: require('./pictures/brock.JPG'), alt:'Brockhampton, 2018'},
      { path: require('./pictures/ekali.JPG'), alt:'Ekali at Ultra, 2018'},
      { path: require('./pictures/ellies.JPG'), alt:'Ellies Diner, 2018'},
      { path: require('./pictures/floridaellies.JPG'), alt:'Ellies, 2018'},
      { path: require('./pictures/hen-1.png'), alt:'RL in LA, 2017'},
      { path: require('./pictures/hen-4.JPG'), alt:'Henry at Ultra, 2018'},
      { path: require('./pictures/hen.jpg'), alt:'RL in LA, 2017'},
      { path: require('./pictures/nyc-2.jpg'), alt:'Central Park, 2018'},
      { path: require('./pictures/nyc-3.jpg'), alt:'UES, 2018'},
      { path: require('./pictures/nyc-4.JPG'), alt:'Chelsea, 2018'},
      { path: require('./pictures/nyc.jpg'), alt:'The L, 2018'},
      { path: require('./pictures/onedirection.JPG'), alt:'Brockhampton, 2018'},
      { path: require('./pictures/ultra.jpg'), alt:'Ultra Miami, 2018'},
      { path: require('./pictures/wdi.png'), alt:'WDI ACLU, 2017'}
    ];
    return (
      <div className="pages">
        <h2> <center>Photos </center></h2>
        <div className="moments"> A glimpse into my life.... </div>
        {images.map(function(imageProps) {
          <Slider {...settings}>
        return (
          <div>
            <img src={imageProps.path} alt={imageProps.alt} className="moments-images"/>
            <span className="pic-text"> {imageProps.alt} </span>
          </div>
        );
        </Slider>
      })}
    </div>
    );
  }
}

export default Photography;
