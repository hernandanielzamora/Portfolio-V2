import React from "react";
import data from "../data/data.json";
import Project from "./Project";
import "../styles/Projects.scss";

const Projects = () => {
  const rederedProjects = data.map((project) => {
    return (
      <Project
        key={project.id}
        name={project.name}
        description={project.description}
        img={project.img}
        link={project.link}
        github={project.github}
      />
    );
  });

  return (
    <>
      <section>
        <h2 className="title">Highlighted Projects</h2>
        <div className="project-container">
          {rederedProjects}
        </div>
      </section>
    </>
  );
};

export default Projects;
