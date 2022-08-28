import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub, faLinkedin);

const Footer = () => {
  return (
    <div className="contact-details">
      <a href='https://github.com/Khaled91Alkhatib' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" className="git-linkedin" /></a>
      <div className="email">khaledkhatib91@hotmail.com</div>
      <a href='https://www.linkedin.com/in/khaledalkhatib/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin" className="git-linkedin" /></a>
    </div>
  );
};

export default Footer;