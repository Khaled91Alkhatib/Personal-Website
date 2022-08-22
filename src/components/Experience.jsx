import React from 'react'

import "../styles/Experience.scss"

const Experience = (props) => {
  return (
    <div ref={props.myExperienceRef} className='main-experience'>
      <h2 className='experience-title exp-count'>Where I've Worked</h2>
      <div className='work-data'>
        During the time I was pursuing my bachelor's degree in dentistry, I worked for almost one year as a dental assistant.<br /><br />
        After graduation, I was not able to work in my profession due to circumstances out of my hand.<br /> However, I was fortunate enough to find a job as a sales representative which I did for two years in two different companies until I moved to Canada in 2020. The companies that I worked in were Sawary Trading and Contracting Company and Damas Medical Company which are both located in Jeddah, Kingdom of Saudi Arabia.<br />
        Within these two years, I also did some minor short-term tasks mostly involving data entry.<br /><br />
        While I was holding the position of a sales representative, my job included:
        <ul>
          <li>Meeting sales goals.</li>
          <li>Preparing and submitting sales contracts for orders.</li>
          <li>Contributing to team effort by accomplishing related results as needed.</li>
          <li>Answering client questions about credit terms, products, prices and availability.</li>
          <li>Visiting clients and potential clients to evaluate needs or promote products and services.</li>
          <li>Resolving customer complaints by discussing problems, working on solutions and making recommendations to management.</li>
        </ul>
      </div>
    </div>
  )
}

export default Experience