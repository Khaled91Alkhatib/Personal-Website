import React from 'react';

import '../styles/Work.scss';

const Work = (props) => {
  return (
    <div ref={props.refProp} className='main-work'>
      <h2 className='work-title'>Some Apps I've Built </h2>
      <div className='my-info'>Throughout the time span of Lighthouse Labs bootcamp, I was required to complete several projects to practice coding and get more comfortable with it. In addition to that, I did a number of simpleer apps on my own to practice specific implementations. <br /> <br />There are several apps on my github and here are a few:</div>
      <br />
      <br />
      <div className='app-with-image'>
        <img className='work-images' src='https://github.com/Khaled91Alkhatib/final-project-client-side/blob/khaled/feature/general-fixes/css/public/screenshots/homepage.png?raw=true' alt='The Shoebox' />
        <div className='app-details'>
          <div className='app-status'> Deployed App</div>
          <a href='https://theshoeboxapp.netlify.app/' target="_blank" rel="noopener noreferrer"><h3 className='app-name'>The Shoebox</h3></a>
          <div className='app-desc'>The Shoebox is an e-commerce full stack app for selling shoes. It includes both customer and admin interfaces.<br />This app was done as a final project for LightHouse Labs.<br />Feel free to check this <a href='https://github.com/Khaled91Alkhatib/final-project-client-side' target="_blank" rel="noopener noreferrer"> link </a> to see the README for a more detailed description.</div>
        </div>
      </div>
      
      <div className='other-app-with-image'>
        <img className='work-images' src='https://github.com/Khaled91Alkhatib/Food-Pick-up-Ordering-app/blob/master/screenshots/Menu%20page.png?raw=true' alt='Best Taco' />
        <div className='other-app-details'>
          {/* <div className='app-status'> Deployed App</div> */}
          <a href='https://github.com/Khaled91Alkhatib/Food-Pick-up-Ordering-app' target="_blank" rel="noopener noreferrer"><h3 className='app-name'>Best Taco</h3></a>
          <div className='app-desc'>Best taco is food ordering website where customers can order food for pick up. This app includes user interface as well as admin dashboard. Although the app is not deployed, it can be tested by visiting it's repository (linked in the app name) to see all features this app includes.</div>
        </div>
      </div>

      <div className='third-app'>
        <img className='work-images' src='https://github.com/Khaled91Alkhatib/Weather-App/blob/main/docs/warm-country.png?raw=true' alt='Weather app' />
        <div className='app-details'>
          {/* <div className='app-status'> Deployed App</div> */}
          <a href='https://github.com/Khaled91Alkhatib/Weather-App' target="_blank" rel="noopener noreferrer"><h3 className='app-name'>Weather App</h3></a>
          <div className='app-desc'>Weather app is one of the personal apps I did to practice dynamic coding and the use of APIs. It shows the current temprature of any country the user searches for and the background image changes according to whether the climate is warm or cold.</div>
        </div>
      </div>

    </div>
  );
};

export default Work;