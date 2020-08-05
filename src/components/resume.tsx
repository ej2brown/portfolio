import React, { Component } from 'react';

export default class Resume extends Component {

  render() {
    return (
      <section id="resume" >
        <h1>Resume</h1>

        <section className="eduation">
          <h2>Education</h2>
          <h4>Lighthouse Labs | Mar - May 2020 </h4>
          <div>Diploma: Full-Stack Web Development</div>
          <img src="/images/lighthouselabs-logo.png" alt="lighthouselabs-logo" width="150" height="50"></img>

          <h4>University of Waterloo | 2015 - 2019</h4>
          <div>Bachelor of Science: General</div>
          <img src="/images/uwaterloo-logo.jpg" alt="uwaterloo-logo" width="200" height="100"/>

        </section>
        <h2>Work Experience</h2>
        <h4>Lorem ipsum</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
        </ul>
        <h4>Lorem ipsum</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
        </ul>
      </section >
    )
  }
}