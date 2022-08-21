import React from 'react';

import "../styles/Introduction.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub, faLinkedin);

const Introduction = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

      <div className="intro">
        <h1 className="hi-msg">Hi, my name is</h1>
        <h2 className="name">Khaled Alkhatib.</h2>
        <h3 className="passion">I bring ideas to life in the browser.</h3>
        <div className='small-story'>I am a dentist who decided to take a leap of faith and transition into a front end web developer.</div>
      </div>
      <div className='contact'>
        <div className='lines-links'>
          <div className='contact-icons'>
            <a href='https://github.com/Khaled91Alkhatib' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" className='contact-icons git' /></a>
            <a href='https://www.linkedin.com/in/khaledalkhatib/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin" className='contact-icons linked' /></a>
          </div>
        </div>
        <div className='contact-email'>khaledkhatib91@hotmail.com</div>
      </div>

    </>
  );
};

export default Introduction;