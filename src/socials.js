import React, { Component } from 'react';
import socials from './pictures/iconss.png'

class Socials extends Component {
  render() {
    return (
      <div>
      <img src={socials} className="social-icons" width="300" usemap="#planetmap"/>
        <map name="planetmap">
        <area coords="260,52,31" shape="circle" href="https://www.linkedin.com/in/najah-izquierdo-801955138/" />
        <area coords="118,54,32" shape="circle" href="https://www.instagram.com/nastyynaj/"/>
        <area coords="190,53,34" shape="circle" href="https://twitter.com/najahxilonen"/>
        <area coords="47,54,34" shape="circle" href="https://www.facebook.com/najonaslover" />
      </map>
      </div>
    );
  }
}

export default Socials;
