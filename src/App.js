import React, { Component } from 'react';
import './App.css';
import Portfolio from './Portfolio.js'
import { Button, Card, row, col } from 'react-materialize';
import Projects from './ProjectsComponent.js'
import {BrowserRouter, Route, Router, Redirect} from 'react-router-dom';
import Sidebar from './SideNavBarComponent.js'
import Moments from './PhotographyComponent.js'
import Music from './Music.js'
import Bsp from './BlazingStonePizza.js'
import AboutMe from './AboutComponent.js'
import Topify from './Topify.js'
import Graphic from './GraphicDesignComp.js'
import Videos from './Videos.js'
import Contact from './Contact.js'
import me from './pictures/name-tag.png'

class App extends Component {
  constructor(props){
   super(props);

   this.state = {
     show: false
   }
   this.doSomething = this.doSomething.bind(this);
   this.toggleShow = this.toggleShow.bind(this);
   this.hide = this.hide.bind(this);
 }

 doSomething(e){
   e.preventDefault();
   console.log(e.target.innerHTML);
 }

 toggleShow(){
   this.setState({show: !this.state.show});
 }

 hide(e){
   if(e && e.relatedTarget){
     e.relatedTarget.click();
   }
   this.setState({show: false});
 }

  render() {
        return (
      <BrowserRouter>
      <div>
        <div className="button">
          <a
            className="button dropdown-toggle"
            onClick={this.toggleShow}
            onBlur={this.hide}
          >


          {"MENU"}
          <span className="caret"></span>
        </a>
          {
            this.state.show &&
          (
            <ul className="dropdown-menu" style={{display: 'block'}}>
            <li><a href='/projects'>WEB DESIGN</a></li>
            <li><a href="/graphicdesign"> GRAPHICS </a> </li>
            <li><a href="/moments">PHOTOGRAPHY</a></li>
            <li><a href="/videos">VIDEOS</a></li>
          </ul>
          )
          }

        </div>
      <Sidebar />
        <Route exact path='/' component={Portfolio} />
        <Route path='/projects' component={Projects}/>
        <Route path='/videos' component={Videos}/>
        <Route path='/graphicdesign' component={Graphic}/>
        <Route path='/moments' component={Moments}/>
        <Route path='/topify' component={Topify}/>
        <Route path='/bsp' component={Bsp} />
        <Route path='/mixes' component={Music} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={AboutMe} />
    </div>
  </BrowserRouter>
    );
  }
}

export default App;
