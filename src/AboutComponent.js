import React, { Component } from 'react';
import Slider from 'react-slick'
import tumblr from './pictures/tumblr.png'
import pinterest from './pictures/pinterest.png'
import fb from './pictures/fb.png'
import insta from './pictures/insta.png'
import linkedin from './pictures/linkedin.png'
import sc from './pictures/sc.png'
import me from './pictures/ME.JPG'
import twitter from './pictures/twitter.png'

class AboutMe extends Component {
  render() {
    return (
      <div className="pages">
        Najah Izquierdo. 21. Creative, curious, perfectionist.
        <p> <img src={me} className="about-me-pic" /> </p>
        <p>
          I am a web developer and a student. I attend SJSU and i'm trying to double major in
          Economics and Computer Science. In my free time, I enjoy teaching
          myself and learning new, creative skills that allow me to express myself in all forms.
          I enjoy dabbling in many different areas, such as: music, digital art, and anything web design.
          Coding has really expanded my creativity, allowing me to incorporate all of my interests due to it's versatility.
          
        </p>
        <p>
        <a href="http://www.facebook.com/najonaslover">
          <img src={fb} className="icon_about" />
        </a>
        <a href="http://soundcloud.com/nastyynajj">
          <img src={sc} className="icon_about" />
        </a>
        <a href="http://www.linkedin.com/in/najah-izquierdo-801955138/">
         <img src={linkedin} className="icon_about" />
       </a>
        <a href="http://www.instagram.com/nastyynaj">
          <img src={insta} className="icon_about"/>
        </a>
        <a href="http://www.najxil.tumblr.com">
          <img src={tumblr} className="icon_about" />
        </a>
        <a href="http://www.pinterest.com/Nastyynaj/">
          <img src={pinterest} className="icon_about" />
        </a>
        <a href="http://www.twitter.com/champagnenajah">
          <img src={twitter} className="icon_about" />
        </a>
    </p>
      </div>
    );
  }
}

export default AboutMe;
