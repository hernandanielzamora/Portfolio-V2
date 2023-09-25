import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <>
      <ul className='header-container'>
        <div className='name-container'>
          <li>Hernán Zamora</li>
        </div>
        <div className='links-container'>
          <a href='#projects'><li className='navbar-icon'>Portfolio</li></a>
          <a href='#about'><li className='navbar-icon'>About</li></a>
          <a href='#contact'><li className='navbar-icon'>Contact</li></a>
          <a href='mailto:hernandanielzamora@gmail.com'><li className='navbar-icon'><FontAwesomeIcon icon={faEnvelope} /></li></a>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
