import React from "react";

import "../styles/Navbar.scss";
import "@fontsource/fira-code";


const Homepage = () => {
  return (
    <>
      <div className="nav-bar">
        <svg>
          <polygon points="50 3,100 28,100 75, 50 100,3 75,3 25" />
          <text className="polygon-text" x="14" y="28" fill="white">K</text>
        </svg>
        <div className="slideInFromRight">
          <button className="nav-buttons first">About</button>
          <button className="nav-buttons second">Experience</button>
          <button className="nav-buttons third">Work</button>
          <button className="nav-buttons resume">Resume</button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
