import React from 'react'
import './Project.scss'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import ux from '../assets/images/ux-design.png'
import ui from '../assets/images/design.png'
import figma from '../assets/images/figma.png'
import html from '../assets/images/html2.png'
import css from '../assets/images/css2.png'
import javascript from '../assets/images/js.png'
import mongodb from '../assets/images/mongodb.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import xampp from '../assets/images/xampp.png'
import wordpress from '../assets/images/wordpress.png'
import php from '../assets/images/php.png'
import api from '../assets/images/api.png'







const Hero = () => {
  return (
    <div className='project-section'>
      <div className='project-container'>
      
       <motion.div
          initial={{y:100, opacity: 0,}}
          animate={{y:0, opacity: 1,}}
          transition={{duration:0.5, ease:'easeIn'}}
          >
          <h1>PROJECTS</h1>
     </motion.div> 
    </div>


    <div className='project-wrapper'>

    
          <motion.div className='project-card'
               initial={{y:0, opacity: 0,}}
               animate={{y:0, opacity:1}}
               whileInView={{x:0, opacity: 1}}
               viewport={{ once: true }}
               transition={{delay:1, duration:0.5, ease:'easeIn'}}
               >
        
                  <h1>01</h1>
                  <h4>LEMONTREE WEBSITE <br />
                      </h4> <br />
                      <p style={{paddingTop: '3rem'}}>Modernizing and updating Lemontrees website and keep it maintainable
                      through Wordpress.   </p>
              
            
                  <div className='icons'>
                  <img src={wordpress} alt='wordpress'/>
                  <img src={xampp} alt='xampp'/>
                  <img src={php} alt='PHP' />
                  <img src={figma} alt='figma' />
                  <p>Wordpress</p>
                  <p>XAMPP</p>
                  <p>PHP</p>
                  <p>FIGMA</p>

                  </div>

          </motion.div>

          <motion.div className='project-card'
              initial={{y:0, opacity: 0,}}
              animate={{y:0, opacity:1}}
              whileInView={{x:0, opacity: 1}}
              viewport={{ once: true }}
              transition={{delay:1.5, duration:0.8, ease:'easeIn'}}>
  
                <h1>02</h1>
                <h4>MEMORY GAME<br /><br />
                </h4>
                <p style={{paddingTop: '3rem'}}>Just a fun game made from a great team work!
                Using Date and Localstorage as techniques to save score and time.
                </p>
                <div className="icons">
                <img src={html} alt='html'/>
                    <img src={css} alt='css'/>
                    <img src={javascript} alt='javascript'/>
                    <img src={figma} alt='figma' />
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JS</p>
                    <p>FIGMA</p>
               </div>
        </motion.div>

        <motion.div className='project-card'
              initial={{y:0, opacity: 0,}}
              animate={{y:0, opacity:1}}
              transition={{delay:2, duration:0.8, ease:'easeIn'}}
              whileInView={{x:0, opacity: 1}}
              viewport={{ once: true }}>
               <h1>03</h1>
             <h4>E-COMMERCE WEBSITE</h4> <br />
               <br />
              <p style={{paddingTop: '3rem'}}>Collaborating in an Agile workflow and through the Scrum method 
              developing a product in sprints.   </p>
                  <div className='icons'>
                  <img src={react} alt='react'/>
                  <img src={mongodb} alt='mongodb'/>
                  <img src={node} alt='node'/>
                  <img src={figma} alt='figma' />
                  <p>REACT</p>
                  <p>MongoDB</p>
                  <p>NODE</p>
                  <p>FIGMA</p>
                  </div>
          </motion.div>

          <motion.div className='project-card'
                  initial={{y:0, opacity: 0,}}
                  animate={{y:0, opacity:1}}
                  transition={{delay:2.5, duration:0.8, ease:'easeIn'}}
                  whileInView={{y:0, opacity: 1}}
                  viewport={{ once: true }}>
                               
                  <h1>04</h1>
                  <h4>MOVIE APP</h4> <br /><br />
                  
                  <p style={{paddingTop: '3rem'}}>Building a simple Movie Application with React and API.    </p>
                  <div className='icons'>
                  <img src={react} alt='react'/>
                  <img src={api} alt='api'/>
                  <img src={node} alt='node'/>
                  <p>React</p>
                  <p>API</p>
                  <p>Node</p>
                  </div>
             
          </motion.div>
          <motion.div className='project-card'
               initial={{y:0, opacity: 0,}}
               transition={{ delay:0.5, duration:0.8, ease:'easeIn'}}
               whileInView={{y:0, opacity: 1}}
               viewport={{ once: true }}
             
               >
        
                  <h1>01</h1>
                  <h4>WEBSITE PROTOTYPE <br />
                      DOCLOUNGE B2B </h4> <br />
                      <p style={{paddingTop: '3rem'}}>A team collaboration with the goal to modernize and develop a coherent structure 
                      and great user experience to the nordic film documentaries website.   </p>
                        <div className='icons'>
                        <img src={ui} alt='ui'/>
                        <img src={ux} alt='ux'/>
                        <img src={figma} alt='figma' />
                        <p>UI</p>
                        <p>UX</p>
                        <p>FIGMA</p>

                    </div>

          </motion.div>
          
        </div>
        </div>



  
   
  )
}

export default Hero 