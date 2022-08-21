import React from 'react';

import "../styles/AboutMe.scss";

const AboutMe = (props) => {
  return (
    <div ref={props.myAboutRef} className='main-aboutme'>
      <h2 className='about-title count'>About Me</h2>
      <div className='image-and-desc'>
        <div className='my-info'>Hello! My name is Khaled, I am a front end web developer with a background in dentistry.<br /> I have always been interested in tweaking codes and seeing the outcome. I remember back in the day when I used to change some single player game codes to have a better gaming experience.<br /><br /> Few years after finishing my bachelors in dentistry, I moved to Canada and while I was working on dentistry accreditation, I found my interest in coding spark back to life. This time I decided to do something about it and lucky for me, I met someone who advised me to look for bootcamps. <br /><br /> That is when I researched the possible opportunities that lie within the profession of web development and decided transition to that career full time.</div>
        <img className='khaled' src='https://res.cloudinary.com/khaled-cloud/image/upload/v1660410186/Screen_Shot_2021-11-26_at_3.23.00_PM_hnbnwh.png' alt='khaled'/>
      </div>
    </div>
  );
};

export default AboutMe;