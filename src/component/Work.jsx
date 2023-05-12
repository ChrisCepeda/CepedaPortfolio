import React from 'react'
import './Work.scss'
import { motion } from 'framer-motion'
import Modalcode from '../component/Modalcode'
import Modaltools from '../component/Modaltools'

import html from '../assets/images/html2.png'
import css from '../assets/images/css2.png'
import react from '../assets/images/react.png'
import javascript from '../assets/images/js.png'
import node from '../assets/images/node.png'
import api from '../assets/images/api.png'
import firebase from '../assets/images/firebase.png'
import xampp from '../assets/images/xampp.png'
import vsc from '../assets/images/vsc.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'
import sass from '../assets/images/sass.png'
import ps from '../assets/images/ps.png'
import trello from '../assets/images/trello.png'
import figma from '../assets/images/figma.png'
import miro from '../assets/images/miro-2.svg'
import wordpress from '../assets/images/wordpress.png'
import ux from '../assets/images/ux-design.png'
import ui from '../assets/images/design.png'
import diplom from '../assets/images/diploma.png'
import bachelor from '../assets/images/bachelor.png'
import express from '../assets/images/express.js.png'
import mongodb from '../assets/images/mongodb.png'
import materialui from '../assets/images/materialui.png'
import ac from '../assets/images/ac.png'




const Work = () => {
  return (
    <div className='work'>
    <div className='work-container'>
    
     <motion.div
     initial={{y:100, opacity: 0,}}
     whileInView={{y:0, opacity: 1,}}
     viewport={{ once: true }}
     transition={{duration:0.5, ease:'easeIn'}}

     
     ><h1>SKILLS</h1>
     </motion.div> 
    </div>

    
    <div className='work-wrapper'>

          <motion.div className='work-card'
           initial={{x:20, opacity: 0,}}
           whileInView={{x:0, opacity:1}}
           viewport={{ once: true }}
           transition={{delay:1, duration:.5, ease:'easeIn'}}
          
            >

          <h2>CODE</h2>
          <div className='tech'>
              <img src={html} alt='html'/>
              <img src={css} alt='css'/>
              <img src={sass} alt='sass'/>
              <img src={javascript} alt='javascript'/>
              <p> HTML</p>
              <p>CSS</p>
              <p>Sass</p>
              <p>JavaScript</p>
              <img src={react} alt='react'/>
              <img src={node} alt='node'/>
              <img src={api} alt='api' />
              <img src={express} alt='express' />
            
              <p> React</p>
              <p>Node.js</p>
              <p>API</p>
              <p>Express</p>
              <img src={mongodb} alt='mongodb'/>
              <img src={firebase} alt='firebase'/>
              <img src={xampp} alt='xampp'/>
              <img src={wordpress} alt='wordpress'/>
              <p>MongoDB</p>
              <p> Firebase</p>
              <p>XAMPP</p>
              <p>Wordpress</p>
              
              
          </div>

        
         <Modalcode />
          
            
          </motion.div>


          <motion.div className='work-card'
           initial={{x:20, opacity: 0,}}
           whileInView={{x:0, opacity:1}}
           viewport={{ once: true }}
           transition={{delay:1.5, duration:.5, ease:'easeIn'}}
           >
           
           <h2>TOOLS</h2>
           <div className='tech'>
              <img src={vsc} alt='visualstudiocode'/>
              <img src={git} alt='git'/>
              <img src={github} alt='github'/>
              <img src={figma} alt='figma' />
              <p>VSC</p>
              <p>GIT</p>
              <p>GitHub</p>
              <p>Figma</p>
              <img src={materialui} alt='materialui'/>
              <img src={ps} alt='photoshop'/>
              <img src={trello} alt='trello'/>
              <img src={miro} alt='miro'/>
              <p style={{fontSize:14}}>MaterialUI</p>
              <p style={{fontSize:14}}>Photoshop</p>
              <p>Trello</p>
              <p>Miro</p>
        
              <img src={ui} alt='ui'/>
              <img src={ux} alt='ux'/>
              <img src={ac} alt='accessibility'/><br></br>
  
           
              <p>UI</p>
              <p>UX</p>
              <p style={{fontSize:14}}>Accessibility</p>
      
        
            

          </div>

          <Modaltools />
           
          
         </motion.div>

        <motion.div className='work-card'
        
          initial={{x:20, opacity: 0}}
          whileInView={{x:0, opacity:1}}
          viewport={{ once: true }}
          transition={{delay:2, duration:.5, ease:'easeIn'}}>
        
        
        <h2>DEGREES</h2>
        <div className='tech-two'>
       

        <img src={diplom} alt='diploma'/>
        <p>Diploma Frontend Development
        </p>

        <img src={bachelor} alt='bacheloreducation'/>
        <p>Bachelor in Education
        </p>

        <img src={bachelor} alt='bachelorspanish'/>
        <p>Bachelor in Spanish
        </p>

        </div>

        </motion.div>
        </div>


      </div>
   
  )
}

export default Work