import React from 'react';
import '../styles/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer>
    <div className="copyright">
      <h3 className="footer-title">© 2023 Hernán D. Zamora. All rights reserved.</h3>
    </div>
    <div className="footer-icon-container">
      <a href="mailto:hernandanielzamora@gmail.com" aria-label="Send me an Email">
        <li>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fa-2xl contact-icon"
          />
        </li>
      </a>
      <a href="https://github.com/hernandanielzamora" rel="noreferrer" target="_blank" aria-label="Visit my Github Profile">
        <li>
          <FontAwesomeIcon
            icon={faGithub}
            className="fa-2xl contact-icon"
          />
        </li>
      </a>
      <a href="https://www.linkedin.com/in/zamora-hernan/" rel="noreferrer" target="_blank" aria-label="Visit my linkedin page">
        <li>
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fa-2xl contact-icon"
          />
        </li>
      </a>
    </div>
  </footer>
);

export default Footer;
