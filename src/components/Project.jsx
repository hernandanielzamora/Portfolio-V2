import React from "react";
import '../styles/Project.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ name, description, img, link, github }) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={img} alt={name} />
      </div>
      <div className="project-text">
        <h3 className="sub-title">{name}</h3>
        <p className="paragraph">{description}</p>
        <div className="btn-container">
          <button><a href={link} target="_blank" rel="noreferrer">Live Demo</a></button>
          <button><a href={github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-xl"/></a></button>
        </div>
      </div>
    </div>
  );
};

export default Project;
