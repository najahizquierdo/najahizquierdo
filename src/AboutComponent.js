import React, { Component } from 'react';
import Slider from 'react-slick'
import tumblr from './pictures/tumblr.png'
import pinterest from './pictures/pinterest.png'
import fb from './pictures/fb.png'
import insta from './pictures/insta.png'
import linkedin from './pictures/linkedin.png'
import spotify from './pictures/spotify.png'
import me from './pictures/ME.JPG'
import youtube from './pictures/youtube.png'
import twitter from './pictures/twitter.png'

class AboutMe extends Component {
  render() {
    return (
      <div className="pages">

        <p> <img src={me} className="about-me-pic" /> </p>
        <p>
          Najah Izquierdo. 21. Creative, curious, perfectionist.
        </p>
        <p>
          I am a Los Angeles, California native who currently resides in the South Bay.
          Prior to this, I was living in New York City. Relocation quite a bit in the
          last few years has allowed me to take inspiration from each city and incorporate it into
          daily life and craft.
        </p>
          my curiostity has pushed me to learn new, creative skills that allow me to express myself in all forms.
          My inquisitive nature has led me into other ventures such as music, digital arts, and web design.
          These things have inpired me to further explore my interests and fuel my creativity.

          <p>
          web development has given me the freedom to
          create new, exciting content within my interests.
          Since coding is so versatile, I am able to bring life to ideas that involve both tech and art,
          an extremely important combination. Often times, the two are categorized
          as complete opposites. In my experience, the two must be paired in order to create beautiful and meaningful
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
