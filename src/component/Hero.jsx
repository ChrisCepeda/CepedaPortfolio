import React from 'react'
import './Hero.scss'
import 'animate.css';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import profilbild from '../assets/images/profilbild.png'


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
           <p>CONTACT</p>  </motion.button> </a>
          </div>

        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <Link to="/About">
          <motion.button className='about-button'
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           >
           <p>ABOUT</p>  </motion.button> </Link>
         </div>
      </div>
      </div>


      <motion.div className='right'
         initial={{x:20, opacity: 0,}}
         whileInView={{x:0, opacity: 1}}
         viewport={{ once: true }}
         transition={{delay:1, duration:0.5, ease:'easeIn'}}
        >
          
        <img src={profilbild} alt='profilbild'/>         
        </motion.div>
      </div>
   </div>

  )
}

export default Hero 