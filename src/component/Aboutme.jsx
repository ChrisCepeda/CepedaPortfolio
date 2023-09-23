import React from 'react'
import './Aboutme.scss'
import { motion } from 'framer-motion'
import ux from '../assets/images/ux-design.png'
import ui from '../assets/images/design.png'
import figma from '../assets/images/figma.png'
import mongodb from '../assets/images/mongodb.png'
import css from '../assets/images/css2.png'
import react from '../assets/images/react.png'
import javascript from '../assets/images/js.png'
import html from '../assets/images/html.png'
 


const About = () => {
  return (

    <div className='about-hero'>

          <div className='aboutme-container'>
          <motion.div
          initial={{y:100, opacity: 0,}}
          animate={{y:0, opacity: 1,}}
          transition={{duration:0.5, ease:'easeIn'}}
          
          ><h1>ABOUT CHRISTINA</h1>
          </motion.div> 
          </div>


          <motion.div className='about-frontend'
            initial={{y:100, opacity: 0,}}
            animate={{y:0, opacity:1}}
            transition={{delay:1.0, duration:0.8, ease:'easeIn'}}>
      
          <div className='intro-cardone'>
            <h1>01</h1>
            <h4>FRONTEND
            DEVELOPMENT</h4>
         </div>
    
         <div className='frontend-text'>

            <p>
              I am constantly buildning applications with both front-and backend techstack. 
              I have tons of experience collaborating in teams practising 
              an agile workflow through Kanban and Scrum method. 
              And implementing to the projects a design thinking through 
              user-Centered design (UX) and layout design (UI).<br /> <br />
              

              🎓 QUALIFICATIONS <br />
              March 2023 Diploma in Frontend Development / Hyper Island.<br /> <br />

              🦾 TECHNOLOGY STACK<br/>      </p>

             <div className='tech-stack'>
              <img src={html} alt='html'/>
              <img src={css} alt='css'/>
              <img src={javascript} alt='javascript'/>
               <img src={react} alt='React'/>
               <img src={mongodb} alt='Mongodb'/>
                <img src={ui} alt='ui'/>
               <img src={ux} alt='ux'/>
               <img src={figma} alt='figma'/>
             </div>
              
           </div>
          </motion.div>

          <motion.div className='about-frontend'
            initial={{y:100, opacity: 0,}}
            transition={{delay:1.0, duration:0.8, ease:'easeIn'}}
            whileInView={{y:0, opacity: 1}}
            viewport={{ once: true }}>
      
          <div className='intro-cardone'>
            <h1>02</h1>
            <h4>DESIGN</h4>
         </div>
    
         <div className='frontend-text'>

            <p>
               During several years I ran my own business in clothes and textile collections
               collaborating with tailors and pattern makers in India/Rajastan and Indonesia/Bali, 
               creating clothes collections.<br /> <br />
              
              🎓 QUALIFICATIONS <br />
              Design in Profession and Theory course / Borås Textilhögskola. <br />
              Pattern making course / Malmö Folkhögskola <br /> <br />

              🦾 SKILLS <br />
              #textile design #sewing techniques #patternmaking #fabrics
              #import and export of goods
              #retail #sales #customer service<br />  </p>
              
           </div>
          </motion.div>

          <motion.div className='about-frontend'
            initial={{y:100, opacity: 0,}}
            transition={{delay:1.0, duration:0.8, ease:'easeIn'}}
            whileInView={{y:0, opacity: 1}}
            viewport={{ once: true }}>
      
          <div className='intro-cardone'>
            <h1>02</h1>
            <h4>DESIGN</h4>
         </div>
    
         <div className='frontend-text'>

            <p>
               During several years I ran my own business in clothes and textile collections
               collaborating with tailors and pattern makers in India/Rajastan and Indonesia/Bali, 
               creating clothes collections.<br /> <br />
              
              🎓 QUALIFICATIONS <br />
              Design in Profession and Theory course / Borås Textilhögskola. <br />
              Pattern making course / Malmö Folkhögskola <br /> <br />

              🦾 SKILLS <br />
              #textile design #sewing techniques #patternmaking #fabrics
              #import and export of goods
              #retail #sales #customer service<br />  </p>
              
           </div>
          </motion.div>

    </div>
  )
}

export default About 