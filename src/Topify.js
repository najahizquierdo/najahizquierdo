import React, { Component } from 'react';
import topify from './pictures/topify1.png'
import Slider from 'react-slick'
import topify1 from './pictures/topify12.png'


class Topify extends Component {
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

          <h2> Topify </h2>
        </center>
        <center>
            Topify sprouted from my own frustrations. Tired of waiting for Spotify's annual "End of Year Recap", I decided to create my
            own in order to keep up with my music trends. Users are able to see their top artists and top tracks within the given timeframe.
            This was constructed utilizing the Spotipy library, Spotify API, and Bottle for Python. Using a grey scale backdrop, I wanted to play up the UI with several splashes of color. 
            Topify allows a user to enter their URI, authorize through the Spotify API, then displays their information.

          <h5> Technologies </h5>
            Spotify API| Bottle | Python | CSS
        </center>
        <center>
            <img src={topify} className="pictures" />
            <img src={topify1} className="pictures" />
            <h5> This will be available to everyone very soon!</h5>
            </center>
        </div>
      </div>
    );
  }
}

export default Topify;
