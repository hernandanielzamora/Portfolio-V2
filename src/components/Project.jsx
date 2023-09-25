import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({
  name, description, img, link, github,
}) => (
  <div className="project-card">
    <div className="project-img">
      <img src={img} alt={name} />
    </div>
    <div className="project-text">
      <h3 className="sub-title">{name}</h3>
      <p className="paragraph">{description}</p>
      <div className="btn-container">
        <button type="button"><a href={link} target="_blank" rel="noreferrer" aria-label="Live Demo">Live Demo</a></button>
        <button type="button"><a href={github} target="_blank" rel="noreferrer" aria-label="Source Code"><FontAwesomeIcon icon={faGithub} className="fa-xl" /></a></button>
      </div>
    </div>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Project;
