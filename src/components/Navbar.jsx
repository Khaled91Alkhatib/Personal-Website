import React from "react";

import "../styles/Navbar.scss";
import "@fontsource/fira-code";

import pdf from '../Resume.pdf'

const Homepage = (props) => {
  return (
    <>
      <div className="nav-bar">
        <svg className="test">
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
    </>
  );
};

export default Homepage;
