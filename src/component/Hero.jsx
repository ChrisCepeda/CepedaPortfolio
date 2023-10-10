import React from 'react'
import './Hero.scss'
import 'animate.css';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div className='hero'>

     <div className='container'>

      <div className='left'>
       <h1 className="animate__animated animate__fadeInUp">HELLO!</h1>
       <h2 className="animate__animated animate__fadeInUp animate__delay-1s"> 
        I'm Christina, a teacher, frontend developer and designer. <br></br>I have gathered a 
        wealth of experience and skills in these fields. <br/><br/>
        
        Contact me if you are interested in any 
        collaboration! 
        
       </h2>
      
      <div className='contact-field'>
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
      <a href="mailto:hello@cepeda.se">
          <motion.button className='about-button'
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           >
           <p>CONTACT</p>  </motion.button> </a></div>

           <div className="animate__animated animate__fadeInUp animate__delay-2s">

          <Link to="/About">
          <motion.button className='about-button'
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           >
           <p>ABOUT</p>  </motion.button> </Link>
  
      </div>
      </div>

      <div className='card-wrapper'>
       <div className='animate__animated animate__fadeInUp animate__delay-3s intro-cardone'>
            <h1>01</h1>
            <h4>EDUCATION</h4>
         </div>

        <div className='animate__animated animate__fadeInUp animate__delay-4s intro-cardtwo'>
          <h1>02</h1>
          <h4>FRONTEND DEVELOPMENT<br></br>
          </h4>
        </div>

        <div className='animate__animated animate__fadeInUp animate__delay-5s intro-cardthree'>
          <h1>03</h1>
          <h4>DESIGN<br></br></h4>
        </div>

        </div>
      </div>
 

  
        </div>
     </div>

  )
}

export default Hero 