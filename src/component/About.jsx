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
     
        <h1>Let's Collaborate!</h1> 

        <p> Let's Collaborate

            If you're looking for a passionate frontend developer who can infuse creativity into 
            your web projects, I would love to collaborate with you. <br></br>
            Whether you have a specific project in mind or want to explore new ideas, 
            I'm here to bring your vision to life.

            Thank you for visiting my portfolio, and I look forward to 
            connecting with you to create beautiful and functional web experiences together.
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