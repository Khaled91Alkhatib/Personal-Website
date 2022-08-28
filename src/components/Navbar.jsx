import React from "react";

import "../styles/Navbar.scss";
import "@fontsource/fira-code";

import pdf from '../Resume.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub, faLinkedin);

const Homepage = (props) => {
  return (
    <>
      <div className="nav-bar">
        <svg className="svg-icon">
          <polygon points="50 3,100 28,100 75, 50 100,3 75,3 25" />
          <text className="polygon-text" x="14" y="28" fill="white">K</text>
        </svg>
        <div className="slideInFromRight">
          <button onClick={props.aboutOnClick} className="nav-buttons first">About</button>
          <button onClick={props.workOnClick} className="nav-buttons second">Work</button>
          <button onClick={props.experienceOnClick} className="nav-buttons third">Experience</button>
          <a href={pdf} target="_blank" rel="noopener noreferrer"><button className="nav-buttons resume">Resume</button></a>
        </div>
      </div>
      <div className="contact-details">
        <a href='https://github.com/Khaled91Alkhatib' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" className="git-linkedin" /></a>
        <div className="email">khaledkhatib91@hotmail.com</div>
        <a href='https://www.linkedin.com/in/khaledalkhatib/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin" className="git-linkedin" /></a>
      </div>
    </>
  );
};

export default Homepage;
