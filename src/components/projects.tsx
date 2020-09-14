import React, { Component } from 'react';
import Card from "./materialui/projectCard";
import { projects } from "./data/projects";

export default class Projects extends Component {

  render() {
    return (
      <section id="projects" >
        <h1>Projects</h1>
        {projects.map((project: { title: string; paragraph: string; link: string; img: string; frontEnd: string; backEnd: string; date: string; highlight: string;}) => {
          return <Card title={project.title} paragraph={project.paragraph} link={project.link} img={project.img} frontEnd={project.frontEnd} backEnd={project.backEnd} date={project.date} highlight={project.highlight}></Card>
        })}
      </section >
    )
  }
};