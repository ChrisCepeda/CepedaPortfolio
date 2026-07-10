import React from 'react'
import './Hero.scss'
import 'animate.css';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
        <div className="hero">
             <motion.div className='animateone'
                     initial={{x:-20, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     viewport={{ once: true }}
                      transition={{delay:1, duration:2, ease:'easeIn'}}>

                <h4>Christina Cepeda</h4>
                </motion.div>

          <div className="container">
            <div className="hero-text">
        
                <motion.div className='animateone'
                     initial={{x:-20, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     viewport={{ once: true }}
                      transition={{delay:1.5, duration:2, ease:'easeIn'}}>

           
                
                <h5 style= {{color: '#fff'}}>[design,
                form & creativity ]
                <p>I blend digital development, education, and design to create thoughtful, functional
                  and inspiring experiences. 
                </p>
                </h5>
                </motion.div>

                <motion.div
                initial={{x:-20, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     viewport={{ once: true }}
                      transition={{delay:2, duration:2, ease:'easeIn'}}>
                <Link to="/About">
                        <motion.button className='about-button'
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                         >
                         <p style={{color: '#fff'}}>más</p>  </motion.button> </Link>
                </motion.div>

                </div>

             

              

            </div>
          </div>
      )
    }
    
    export default Hero