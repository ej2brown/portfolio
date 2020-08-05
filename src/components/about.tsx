import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about" >
        <h1>About Me</h1>
        
        <div className="grid-container">
          <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>

          <div className="social-links container">
            <ul className="contact-info" aria-label="Contact Details">
              <li>Lorem ipsum</li>
              <li>dolor sit amet</li>
              <li>consectetur adipiscing</li>
              <li>sed do eiusmod tempor incididun</li>
            </ul>
            <div>
              <ul className="social-icons">
                <li><a href="google.com"><i className="fa fa-linkedin fa-2x" /></a></li>
                <li><a href="google.com"><i className="fa fa-google-plus  fa-2x" /></a></li>
                <li><a href="google.com"><i className="fa fa-github  fa-2x" /></a></li>
              </ul>
              <a href="https://www.canva.com/design/DAD58RM28DQ/iWKynSknVd5VJoSi8i9Zpw/edit" className="resume-btn">
                Download Resume</a>
            </div>
          </div>
        </div>

      </section >
    )
  }
}