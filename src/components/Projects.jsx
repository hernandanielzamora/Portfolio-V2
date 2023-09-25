import React from 'react';
import data from '../data/data.json';
import Project from './Project';
import '../styles/Projects.scss';

const Projects = () => {
  const rederedProjects = data.map((project) => (
    <Project
      key={project.id}
      name={project.name}
      description={project.description}
      img={project.img}
      link={project.link}
      github={project.github}
    />
  ));

  return (
    <>
      <section id="projects">
        <h2 className="title">Highlighted Projects</h2>
        <div className="project-container">
          {rederedProjects}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Projects;
