import React from 'react'
import 'boxicons'
import "./about.css"

const Info = () => {
  return (
    <div className='about__info grid'>
            <div className='about__box'>
                 <i class='bx bx-award about__icon'></i>
                 <h3 className='about__title'>experience </h3>
                <span className='about__subtitle'>8 years working</span>
        </div>


        <div className='about__box'>
        <i class='bx bx-briefcase about__icon'></i>
            <h3 className='about__title'>completed </h3>
            <span className='about__subtitle'>48+ projects</span>
        </div>


        <div className='about__box'>
        <i class='bx bx-support'></i>
            <h3 className='about__title'>Supported </h3>
            <span className='about__subtitle'>online 4 /24</span>
        </div>

 
        
     </div>
  )
}

export default Info
