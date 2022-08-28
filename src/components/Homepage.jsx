import React, { useEffect, useRef } from 'react';

import Navbar from "./Navbar";
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Work from './Work';
import Experience from './Experience'

import "../styles/Homepage.scss"
import Footer from './Footer';
const Homepage = () => {
  const myWorkRef = useRef(null)
  const myExperienceRef = useRef(null)
  const myAboutRef = useRef(null)

  const workExecuteScroll = () => myWorkRef.current.scrollIntoView()
  const experienceExcuteScroll = () => myExperienceRef.current.scrollIntoView()
  const aboutExcuteScroll = () => myAboutRef.current.scrollIntoView()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='first-view'>
        <Navbar aboutOnClick = {aboutExcuteScroll} experienceOnClick={experienceExcuteScroll} workOnClick={workExecuteScroll}/>
        <Introduction />
      </div>
      <AboutMe myAboutRef={myAboutRef} />
      <Work myWorkRef={myWorkRef} />
      <Experience myExperienceRef={myExperienceRef} />
      <Footer />
    </div>
  );
};

export default Homepage;