import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import Aboutme from '../assets/images/christina.jpg'
import { Link } from 'react-router-dom'


const About = () => {
  return (

    <div className='About-container'>
       <motion.div className='image-me'
         initial={{x:-20, opacity: 0,}}
         whileInView={{x:0, opacity: 1}}
         viewport={{ once: true }}
         transition={{delay:1, duration:0.5, ease:'easeIn'}}
        >
          
        <img src={Aboutme} alt='christina'/>   
         </motion.div>

    
    <motion.div className='text-me'
       initial={{y:20, opacity: 0}}
       whileInView={{y:0, opacity: 1}}
       viewport={{ once: true }}
        transition={{delay:1, duration:0.5, ease:'easeIn'}}>
     
        <h1>ABOUT</h1> </motion.div>

        <motion.div className='about-text'
        initial={{y:10, opacity: 0}}
        whileInView={{ y:0,opacity: 1}}
        viewport={{ once: true }}
         transition={{delay:2, duration:0.8, ease:'easeIn'}}>
        <p> I'M A STOCKHOLM BASED FRONTEND DEVELOPER WITH GREAT 
          EXPERIENCE IN DESIGNING SOLUTIONS. WHETER IT IS DESIGNING SOLUTIONS IN CODE 
          FOR CLIENTS, DESIGNING MATERIAL AND LESSONS FOR STUDENTS OR DESIGNING PATTERNS AND 
          CLOTHES FOR CUSTOMERS,
          THE MINDSET IN MY WORK EXPERIENCE HAS ALWAYS BEEN ENTREPRENEURIAL, CURIOS AND INNOVATIVE.
          </p>

          <Link to="/About">
          <motion.button className='about-button'
           
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           >
           <p>Read More</p>  </motion.button> </Link>
         
          </motion.div>
      
          </div>
  )
};

export default About