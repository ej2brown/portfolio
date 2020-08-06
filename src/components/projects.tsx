import React, { Component } from 'react';
import Card from "./materialui/card";
import { projects } from "./data/projects";

export default class Projects extends Component {

  render() {
    return (
      <section id="projects" >
        <h1>Projects</h1>
        {projects.map((project: { title: string; paragraph: string; link: string; img: string; }) => {
          return <Card title={project.title} paragraph={project.paragraph} link={project.link} img={project.img} ></Card>
        })}
      </section >
    )
  }
};