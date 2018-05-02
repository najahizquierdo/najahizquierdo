import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import hugo from './pictures/huvs.png';
import mom from './pictures/mom.jpg';
import henry from './pictures/HENRYFINL.png'


class Illustrations extends Component {
  render() {
    return(
  <div>
    <h2> <center>Illustrator </center></h2>
    <div className="container">
    <img src={hugo} className="image"/>
  <div className="middle">
    <div className="text">
      <h6>Pizza Bro</h6>
      <p>
        Portrait
      </p>
      <p>
        Adobe Illustrator
      </p>
        <p>
          2018
        </p>

    </div>
  </div>
</div>
<div className="container">
<img src={henry} className="image"/>
<div className="middle">
<div className="text">
  <h6> NOVA </h6>
  <p>
    Portrait
  </p>
  <p>
    Adobe Illustrator
  </p>
    <p>
      2018
    </p>

</div>
</div>
</div>

</div>
    );
  }
}
export default Illustrations;
