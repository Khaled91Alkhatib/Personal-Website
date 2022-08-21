import React from "react";

import "../styles/Navbar.scss";
import "@fontsource/fira-code";


const Homepage = (props) => {
  return (
    <>
      <div className="nav-bar">
        <svg>
          <polygon points="50 3,100 28,100 75, 50 100,3 75,3 25" />
          <text className="polygon-text" x="14" y="28" fill="white">K</text>
        </svg>
        <div className="slideInFromRight">
          <button onClick={props.click} className="nav-buttons first">About</button>
          <button onClick={props.onClick} className="nav-buttons second">Work</button>
          <button className="nav-buttons third">Experience</button>
          <a href="https://resume.creddle.io/resume/90ahh4140v" target="_blank" rel="noopener noreferrer"><button className="nav-buttons resume">Resume</button></a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
