import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import computer from '../assets/images/intro.jpg'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='about'>
    <div className='about-container'>
       <motion.div className='image-computer'
         initial={{x:-20, opacity: 0,}}
         whileInView={{x:0, opacity: 1}}
         viewport={{ once: true }}
         transition={{delay:1, duration:0.5, ease:'easeIn'}}
        >
          
        <img src={computer} alt='christina'/>   
         </motion.div>

    
    <motion.div className='text-me'
       initial={{y:20, opacity: 0}}
       whileInView={{y:0, opacity: 1}}
       viewport={{ once: true }}
        transition={{delay:1, duration:0.5, ease:'easeIn'}}>
     
        <h1>ABOUT ME</h1> 

        <p> I'm a Stockholm based frontend developer with great experience in designing solutions.
          Whether is designing solutions in code for clients, designing material and lessons for students or
          designing patterns and clothes for customers, the mindset in my work experience has always been
          entrepreneurial, curious and innovative. 
          </p>

          <Link to="/About">
          <motion.button className='about-button'
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           >
           <p>READ MORE</p>  </motion.button> </Link>
         
          </motion.div>
      
          </div>
          </div>
  )
};

export default About