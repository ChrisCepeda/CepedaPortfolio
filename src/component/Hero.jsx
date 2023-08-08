import React from 'react'
import './Hero.scss'
import 'animate.css';

const Hero = () => {
  return (
    <div className='hero'>

     <div className='container'>

      <div className='left'>
       <h1 className="animate__animated animate__fadeInUp">HELLO!</h1>
       <h2 className="animate__animated animate__fadeInUp animate__delay-2s">I'm a frontend developer who loves to work with</h2>
      
      <div className='card-wrapper'>
       <div className='animate__animated animate__fadeIn animate__delay-3s intro-cardone'>
            <h1>01</h1>
            <h4>FRONTEND
            DEVELOPMENT</h4>
         </div>

        <div className='animate__animated animate__fadeIn animate__delay-4s intro-cardtwo'>
          <h1>02</h1>
          <h4>DESIGN<br></br>
          </h4>
        </div>

        <div className='animate__animated animate__fadeIn animate__delay-5s intro-cardthree'>
          <h1>03</h1>
          <h4>EDUCATION<br></br></h4>
        </div>

        </div>
      </div>
 

  
        </div>
     </div>

  )
}

export default Hero 