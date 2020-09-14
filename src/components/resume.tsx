import React, { Component } from 'react';
import Paper from "./materialui/eduationPaper";
import PaperWork from "./materialui/workPaper";
import { schools, work } from "./data/resume";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <h1>Resume</h1>

        <h2>Education</h2>
        <section className="education">
          {schools.map((data: { institute: string; degree: string; alt: string; img: string; }) => {
            return <Paper institute={data.institute} degree={data.degree} alt={data.alt} img={data.img}></Paper>
          })}
        </section>

        <h2>Work Experience</h2>
        <section className="work">
          {work.map((data: { company: string; title: string; summary: string[]; }) => {
            return <PaperWork company={data.company} title={data.title} summary={data.summary}></PaperWork>
          })}
        </section>
      </section >
    )
  }
};