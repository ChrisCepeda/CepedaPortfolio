import React from 'react'
import './Hero.scss'
import 'animate.css';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import profilbild from '../assets/images/profilbild.png'


const Hero = () => {
  return (
        <div className="hero">
          <div className="container">
            <div className="hero-text">
        

                <motion.div className='animateone'
                     initial={{x:-20, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     viewport={{ once: true }}
                      transition={{delay:1.5, duration:2, ease:'easeIn'}}>

                <h1>DESIGN, KOD OCH UNDERVISNING </h1><br></br><p>– Allt börjar med kreativitet</p>
                <p>Välkommen till min portofolio! Här finns en variation av kreativa projekt som jag har medverkat i eller skapat inom webbutveckling, utbildningsledarskap 
                  och kläddesign. 
                </p>
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
                         <p style={{color: '#fff'}}>LÄS MER</p>  </motion.button> </Link>
                </motion.div>

                </div>

                <motion.div className='animate'
                     initial={{x:20, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     viewport={{ once: true }}
                      transition={{delay:1, duration:0.8, ease:'easeIn'}}>
              <img src={profilbild} alt="Christina" className="overlay-photo" />
                       
              </motion.div>

              

            </div>
          </div>
      )
    }
    
    export default Hero