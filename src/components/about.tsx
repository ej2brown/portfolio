import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <h2>About Me</h2>
        <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
            </p>

        <h4>Contact Details</h4>
        <div>Lorem ipsum</div>
        <div>dolor sit amet</div>
        <div>consectetur adipiscing</div>
        <div>sed do eiusmod tempor incididun</div>
        <ul className="social">
          <li><a href="google.com"><i className="fa fa-linkedin" /></a></li>
          <li><a href="google.com"><i className="fa fa-google-plus" /></a></li>
          <li><a href="google.com"><i className="fa fa-github" /></a></li>
        </ul>

        <a href="https://www.canva.com/design/DAD58RM28DQ/iWKynSknVd5VJoSi8i9Zpw/edit" className="resume-btn">
          Download Resume</a>
      </section>
    )
  }
}