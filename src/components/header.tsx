import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="site-heading">
          <div className="site-heading-upper">Elizabeth Brown</div>
          <div className="site-heading-lower">Full-stack Developer</div>
        </h1>
        <ul id="nav" className="nav">
          <li className="current"><a className="" href="#home">Home</a></li>
          <li><a className="" href="#about">About</a></li>
          <li><a className="" href="../images/resume.pdf">Resume</a></li>
          <li><a className="" href="#projects">Projects</a></li>
          <li><a className="" href="#contact">Contact</a></li>
        </ul>
      </header>
    )
  }
};