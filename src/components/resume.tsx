import React, { Component } from 'react';
import Paper from "./materialui/paper";
import PaperWork from "./materialui/paper-work";
import { schools, work } from "./data/resume";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <h1>Resume</h1>

        <section className="education">
          <h2>Education</h2>
          {schools.map((data: { institute: string; degree: string; alt: string; img: string; }) => {
            return <Paper institute={data.institute} degree={data.degree} alt={data.alt} img={data.img}></Paper>
          })}
        </section>
        
        <section className="work">
          <h2>Work Experience</h2>
          {work.map((data: { company: string; title: string; summary: string[]; }) => {
            return <PaperWork company={data.company} title={data.title} summary={data.summary}></PaperWork>
          })}
        </section>
      </section >
    )
  }
};