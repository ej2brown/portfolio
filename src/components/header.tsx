import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <header>
        <ul id="nav" className="nav">
          <li className="current"><a className="" href="#home">Home</a></li>
          <li><a className="" href="#about">About</a></li>
          <li><a className="" href="#resume">Resume</a></li>
          <li><a className="" href="#portfolio">Works</a></li>
          <li><a className="" href="#testimonials">Testimonials</a></li>
          <li><a className="" href="#contact">Contact</a></li>
        </ul>
          <a className="scrolldown" href="#about"><i className="fa fa-arrow-circle-down fa-4x"/></a>
      </header>
    )
  }
}