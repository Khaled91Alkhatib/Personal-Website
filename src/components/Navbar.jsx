import React from "react";

import "../styles/Navbar.scss";
import "@fontsource/fira-code";

import pdf from '../Resume.pdf';

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
        <a href="https://github.com/Khaled91Alkhatib" target="_blank" rel="noopener noreferrer"><i className="fa fa-github git-linkedin"></i></a>
        <div className="email">khaledkhatib91@hotmail.com</div>
        <a href="https://www.linkedin.com/in/khaledalkhatib/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin git-linkedin"></i></a>
      </div>
    </>
  );
};

export default Homepage;
