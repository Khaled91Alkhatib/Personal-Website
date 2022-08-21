import React, { useEffect, useRef } from 'react';

import Navbar from "./Navbar";
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Work from './Work';

import "../styles/Homepage.scss"
const Homepage = () => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()
  
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  // These are for the 'About' button
  const el1 = useRef();
  const el2 = useRef();

  // These are for the 'Work' button
  // const el3 = useRef()
  // const el4 = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='first-view'>
        <Navbar reference={[el1]} onClick={executeScroll} click={() => scrollToDiv(el2)} />
        <Introduction />
      </div>
      <AboutMe reference={el2} />
      <Work refProp={myRef} />
    </div>
  );
};

export default Homepage;