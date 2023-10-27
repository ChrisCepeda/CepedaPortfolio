import React from 'react'
import './Work.scss'
import { motion } from 'framer-motion'
import Modaltwo from './Modaltwo'
import Modalthree from './Modalthree'
import Modalfour from './Modalfour'
import ux from '../assets/images/ux-design.png'
import ui from '../assets/images/design.png'
import figma from '../assets/images/figma.png'
import mongodb from '../assets/images/mongodb.png'
import css from '../assets/images/css2.png'
import react from '../assets/images/react.png'
import javascript from '../assets/images/js.png'
import html from '../assets/images/html.png'
 


const Work = () => {
  return (
    <div className='work'>

      <div className='work-container'>
    
            <motion.div
            initial={{y:100, opacity: 0,}}
            whileInView={{y:0, opacity: 1,}}
            viewport={{ once: true }}
            transition={{duration:0.5, ease:'easeIn'}}
            >
              <h1>PROJECTS</h1>
            </motion.div> 

      <div className='work-wrapper'>
     

  

  <motion.div className='work-cardtwo'
        initial={{x:20, opacity: 0}}
        whileInView={{x:0, opacity:1}}
        viewport={{ once: true }}
        transition={{delay:1, duration:.5, ease:'easeIn'}}>
         
         < Modaltwo />
        <h3>LANDING PAGE</h3>
        <p> A landing page prototype designed with Figma and collaborated in Miro. </p>
       
        <div className='tech-stack'>
        <img src={ui} alt='ui'/>
        <img src={ux} alt='ux'/>
        <img src={figma} alt='figma'/>

        <p>UI</p>
        <p>UX</p>
        <p>Figma</p>
    </div>
  </motion.div>



  <motion.div className='work-cardthree'
        initial={{x:20, opacity: 0}}
        whileInView={{x:0, opacity:1}}
        viewport={{ once: true }}
        transition={{delay:1.5, duration:.5, ease:'easeIn'}}>
         
         < Modalthree />
        <h3>E-COMMERCE WEBSITE</h3>
        <p> Through an 
          Agile workflow and the SCRUM method construct an eCommerce site. </p>
       
        <div className='tech-stack'>
       
        <img src={ux} alt='ux'/>
        <img src={react} alt='React'/>
        <img src={mongodb} alt='Mongodb'/>

        <p>UX</p>
        <p>React</p>
        <p>MongoDB</p>
        
    </div>
  </motion.div>

  <motion.div className='work-cardfour'
        initial={{x:20, opacity: 0}}
        whileInView={{x:0, opacity:1}}
        viewport={{ once: true }}
        transition={{delay:2, duration:.5, ease:'easeIn'}}>
         
         < Modalfour />
        <h3>MEMORY GAME</h3>
        <p> The cutest memory game ever and great collaboration contributing code with GIT </p>
       
        <div className='tech-stack'>
        
        <img src={html} alt='html'/>
        <img src={css} alt='css'/>
        <img src={javascript} alt='javascript'/>

        <p>HTML</p>
        <p>CSS</p>
        <p>JS</p>
    </div>
  </motion.div>

  
      
       </div>
     </div>
  </div>
   
  )
}

export default Work