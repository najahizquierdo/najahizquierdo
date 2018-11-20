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
      { path: require('./pictures/airbnb.jpg'), alt:'West Hollywood, Film, 2018'},
      { path: require('./pictures/booth.jpg'), alt:'Los Angeles, Film, 2018'},
      { path: require('./pictures/cbgb0002.jpg'), alt:'Echo Park, Darkroom print, 2018'},
      { path: require('./pictures/golf.jpg'), alt:'Flog Gnaw, Film, 2018'},
      { path: require('./pictures/jaqui.jpg'), alt:'Jaqui, Film, 2018'},
      { path: require('./pictures/kaiya.png'), alt:'Kaiya, Film, 2018'},
      { path: require('./pictures/la.jpg'), alt:'LA at dawn, Darkroom print, 2018'},
      { path: require('./pictures/mood.jpg'), alt:'San Jose, Film, 2018'},
      { path: require('./pictures/morgan.jpg'), alt:'Halloween,Film, 2018'},
      { path: require('./pictures/ride.jpg'), alt:'CFG, Film, 2018'},
      { path: require('./pictures/selfieeee.jpg'), alt:'Self Portrait, Darkroom print, 2018'},
      { path: require('./pictures/victorian2.jpg'), alt:'Victorian Homes, Darkroom print, 2018'},
      { path: require('./pictures/victorian3.jpg'), alt:'Echo Park, Darkroom print, 2018'},
      { path: require('./pictures/brock.JPG'), alt:'Brockhampton, 2018'},
      { path: require('./pictures/ellies.JPG'), alt:'Ellies Diner, 2018'},
      { path: require('./pictures/hen-4.JPG'), alt:'Henry at Ultra, 2018'},
      { path: require('./pictures/nyc-2.jpg'), alt:'Central Park, 2018'},
      { path: require('./pictures/nyc-4.JPG'), alt:'Chelsea, 2018'},
      { path: require('./pictures/nyc.jpg'), alt:'The L, 2018'},
      { path: require('./pictures/onedirection.JPG'), alt:'Brockhampton, 2018'},
      { path: require('./pictures/wdi.png'), alt:'WDI ACLU, 2017'}
    ];
    return (
      <div className="pages">
        <h2> <center>Photos </center></h2>
        <div className="moments"> IPHONE, FILM, DARKROOM </div>
        {images.map(function(imageProps) {

        return (
          <div>
            <img src={imageProps.path} alt={imageProps.alt} className="moments-images"/>
            <span className="pic-text"> {imageProps.alt} </span>
          </div>
        );

      })}
    </div>
    );
  }
}

export default Photography;
