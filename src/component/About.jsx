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
     
        <h1>LET'S COLLABORATE!</h1> 

        <p>
            My story is one of collaboration and growth across various fields. 
            I've been on an incredible journey as an educator, 
            a clothing designer, and a recent entrant into the world of web development.
            
            I see each project whether it is in education, design or web development an 
            opportunity to combine my skills and ideas with others, 
            resulting in innovative and engaging experiences.
            
             
            Whether you have a specific project in mind or want to explore new ideas, 
            I'm here to bring your vision to life.<br></br>

            Thank you for visiting my portfolio, and I look forward to 
            connecting with you to create beautiful great experiences together.
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