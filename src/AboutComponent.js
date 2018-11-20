import React, { Component } from 'react';
import Slider from 'react-slick'
import tumblr from './pictures/tumblr.png'
import pinterest from './pictures/pinterest.png'
import fb from './pictures/fb.png'
import insta from './pictures/insta.png'
import spotify from './pictures/spotify.png'
import me from './pictures/ME.JPG'
import youtube from './pictures/youtube.png'
import twitter from './pictures/twitter.png'

class AboutMe extends Component {
  render() {
    return (
      <div className="pages">
        <img src={me} className="about-me-pic" />
        <p>
          Najah is a Los Angeles native who currently resides in the South Bay.
          Prior to this, she lived in New York City and attended Dev Bootcamp. Relocating quite a bit in the
          last few years has allowed her to take inspiration from each city and incorporate it into her craft.
        </p>
        Although she has always wanted to pursure a career in technology, she has also strived to enhance her artistic skills.
        Her inquisitive nature has led her into various ventures such as music, digital arts,
        and web design. These things have inpired her to further explore her interests and fuel her creativity.

          <p>
          web development has given her the freedom to create new, exciting content within her interests.
          Since coding is so versatile, she is able to bring life to ideas that involve both tech and art. Often times,
          the two are categorized as complete opposites, but they must be paired in order to create beautiful and meaningful
          content.
        </p>
        <p>
          <center>
        <a href="https://open.spotify.com/user/1262801801?si=1vyiW9B6Q7u_cmYzJL3gcw">
          <img src={spotify} className="icon_about" />
        </a>
        <a href="http://www.instagram.com/nastyynaj">
          <img src={insta} className="icon_about"/>
        </a>
        <a href="http://www.najxil.tumblr.com">
          <img src={tumblr} className="icon_about" />
        </a>
        <a href="https://www.youtube.com/channel/UCW1U1KmKa-NQDdBh9hX3E5g">
          <img src={youtube} className="icon_about" />
        </a>
      </center>

    </p>
</div>
    );
  }
}

export default AboutMe;
