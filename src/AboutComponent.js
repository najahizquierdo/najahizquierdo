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
          I AM A WEB DEVELOPER AND STUDENT. </p>
          <p>
          I ATTEND SJSU AND I'M ATTEMPTING TO DOUBLE MAJOR IN ECONOMICS AND COMPUTER SCIENCE.
          </p>
          I ENJOY DABBLING IN MANY AREAS, SUCH AS: MUSIC,
          DIGITAL ART, AND ANYTHING WEB DESIGN. IN MY FREE TIME, I ENJOY LEARNING NEW,
          CREATIVE SKILLS THAT ALLOW ME TO further explore these interests!
          <p>
          web development has given me the freedom to
          create new, exciting content within my interests.
          Since coding is so versatile, I am able to bring life to ideas that involve both tech and art,
          an extremely important combination. Often times, the two are categorized
          as complete opposites. In my experience, the two must be paired in order to create beautiful and meaningful
          content.
          <div className="collapse">
            <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header white">
              <h5>Why Coding?</h5>
            </div>
            <div className="collapsible-body white">
              <div class="container">
                From charging people $10 to completely redo their myspace layouts to attending a coding bootcamp
                and completely falling in love with front-end development, i continue to realize that coding has
                been a passion of mine since I was 11 years old. The versatility of coding is extremely appealing
                because you can take it in any direction. I hope to create beautiful and meaningful projects while
                still incorporating my personal interests and ideas.
              </div>
            </div>
          </li>
          <li>
            <div className="collapsible-header white">
              <h5>What about Art?</h5>
            </div>
            <div className="collapsible-body white">
              <div class="container">
                As I started to build my coding foundation, I couldn't seem to give up on my artistic outlets.
                I've always had a deep love for music, concerts, underground warehouse parties and festivals.
                My desire to create stems from seeing my favorite artists and DJs live. The passion and creativity that goes
                into a live show made me curious and eager to test my abilities. This inspiration has driven me to bring my ideas to life,
                all while being able to enjoy the feeling of contributing my art to the world.
              </div>
            </div>
          </li>
          </ul>
        </div>
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
