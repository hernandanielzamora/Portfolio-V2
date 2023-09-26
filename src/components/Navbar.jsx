/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.scss';

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuVisible(false);
      }
    };

    if (isMobileMenuVisible) {
      window.addEventListener('keydown', handleEscapeKey);
    } else {
      window.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuVisible]);

  return (
    <ul className="header-container">
      <li className="name-container">
        <a href="#"><li>Hernán Zamora</li></a>
      </li>
      <li className="links-container">
        <a href="#projects"><li className="navbar-icon">Portfolio</li></a>
        <a href="#aboutme"><li className="navbar-icon">About</li></a>
        <a href="#contact"><li className="navbar-icon">Contact</li></a>
        <a href="mailto:hernandanielzamora@gmail.com" aria-label="Send me an Email"><li className="navbar-icon"><FontAwesomeIcon icon={faEnvelope} className="fa-xl" /></li></a>
      </li>

      <div
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            toggleMobileMenu();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faBars} className="fa-xl" />
      </div>

      <li className={`mobile-menu ${isMobileMenuVisible ? 'visible' : ''}`}>
        <div
          className="mobile-menu-close"
          onClick={toggleMobileMenu}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              toggleMobileMenu();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={faTimes} className="fa-xl" />
        </div>
        <a href="#projects"><li className="navbar-icon">Portfolio</li></a>
        <a href="#aboutme"><li className="navbar-icon">About</li></a>
        <a href="#contact"><li className="navbar-icon">Contact</li></a>
        <a href="mailto:hernandanielzamora@gmail.com" aria-label="Send me an Email"><li className="navbar-icon"><FontAwesomeIcon icon={faEnvelope} className="fa-xl" /></li></a>
      </li>
    </ul>
  );
};

export default Navbar;
