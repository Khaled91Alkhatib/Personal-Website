import React from 'react'

import "../styles/Experience.scss"

const Experience = (props) => {
  return (
    <div ref={props.myExperienceRef} className='main-experience'>
      <h2 className='experience-title exp-count'>Where I've Worked</h2>
      <div className='work-data'>
        While I was working on my Bachelor's Degree in dentisry, I worked for almost one year as a dental assistant.<br />
        After graduation, I was not able to work in my profession due to circumstances out of my hand.<br /> However, I was fortunate enough to find a job as a sales representative which I did for two years in two different companies until I moved to Canada in 2020. The companies that I worked in are Sawary Trading and Contracting Company and Damas Medical Company which are both located in Jeddah, Kingdom of Saudi Arabia.<br />
        Within these two years, I also did some minor short-term tasks mostly involving data entry.
      </div>
    </div>
  )
}

export default Experience