import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <header>
        <ul id="nav" className="nav">
          <li className="current"><a className="" href="#home">Home</a></li>
          <li><a className="" href="#about">About</a></li>
          <li><a className="" href="#resume">Resume</a></li>
          <li><a className="" href="#projects">Projects</a></li>
          <li><a className="" href="#contact">Contact</a></li>
        </ul>
      </header>
    )
  }
}