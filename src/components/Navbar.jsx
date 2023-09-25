/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.scss';

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
      <ul className="header-container">
        <div className="name-container">
          <a href="#"><li>Hernán Zamora</li></a>
        </div>
        <div className="links-container">
          <a href="#projects"><li className="navbar-icon">Portfolio</li></a>
          <a href="#aboutme"><li className="navbar-icon">About</li></a>
          <a href="#contact"><li className="navbar-icon">Contact</li></a>
          <a href="mailto:hernandanielzamora@gmail.com" aria-label="Email"><li className="navbar-icon"><FontAwesomeIcon icon={faEnvelope} className="fa-xl" /></li></a>
        </div>

        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="fa-xl" />
        </div>

        <div className={`mobile-menu ${isMobileMenuVisible ? 'visible' : ''}`}>
          <div className="mobile-menu-close" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faXmark} className="fa-xl" />
          </div>
          <a href="#projects"><li className="navbar-icon">Portfolio</li></a>
          <a href="#aboutme"><li className="navbar-icon">About</li></a>
          <a href="#contact"><li className="navbar-icon">Contact</li></a>
          <a href="mailto:hernandanielzamora@gmail.com" aria-label="Email"><li className="navbar-icon"><FontAwesomeIcon icon={faEnvelope} className="fa-xl" /></li></a>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
