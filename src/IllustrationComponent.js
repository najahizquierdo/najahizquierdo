import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import hugo from './pictures/huvs.png';
import mom from './pictures/mom.jpg';


class Illustrations extends Component {
  render() {
    return(
  <div>
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

    <img src={mom} className="image" />

    <div className="middle">
      <div className="text">
        <h6> Queen A(mama)dala</h6>
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
