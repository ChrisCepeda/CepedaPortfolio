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
      
          <div className='animate__animated animate__fadeInUp animate__delay-2s intro-cardone'>
            <h1>01</h1>
            <h4>FRONTEND
            DEVELOPMENT</h4>
         </div>
    
         <div className='animate__animated animate__fadeInUp animate__delay-3s frontend-text'>

            <p>
              I am constantly buildning applications with both front-and backend techstack. 
              I have tons of experience collaborating in teams practising 
              an agile workflow through Kanban and Scrum method. 
              And implementing to the projects a design thinking through 
              user-Centered design (UX) and layout design (UI).<br /> <br />
              

              🎓 QUALIFICATIONS <br />
              March 2023 Diploma in Frontend Development from Hyper Island.<br /> <br />

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

          <motion.div className='about-cardtwo'
            initial={{y:100, opacity: 0,}}
            animate={{y:0, opacity:1}}
            transition={{delay:1.5, duration:0.8, ease:'easeIn'}}>
          
            <h1>02</h1>
            <h4>DESIGN</h4>
            <p>#1 📂 EXPERIENCE <br />
               During several years running a cloths and design business. 
               Collaborating with tailors and pattern makers in India/Rajastan and Indonesia/Bali, creating clothes collections.<br /> <br />
               
              #2 🦾 SKILLS <br />
              Textile design: Sewing techniques, patternmaking and fabrics.<br />
              Import and export: Coordinating with shipping agents for exporting and importing goods.<br />
              Retail: Sales and customer service.<br /> <br />

              #3 🎓 QUALIFICATIONS <br />
              Design in Profession and Theory course from Borås Textilhögskola. <br />
              Pattern making course from Malmö Folkhögskola </p><br /> 


          </motion.div>

          <motion.div className='about-cardthree'
            initial={{y:100, opacity: 0,}}
            animate={{y:0, opacity:1}}
            transition={{delay:2.0, duration:0.8, ease:'easeIn'}}>
          
            <h1>03</h1>
            <h4>EDUCATER</h4>
            <p>#1 📂 EXPERIENCE<br />
                I worked as a teacher for almost ten years, coordinating lessons, evaluation and assessment. 
                Also designing lessons for specific needs and preferences. <br /> <br />
              
              #2 🦾 SKILLS <br />
              Continously developing pedagogic and didactic competence of teaching, teaching techniques, 
              assessment, groupdynamics and feedback.<br /> <br />
              

              #3 🎓 <b> QUALIFICATIONS </b> <br />
              Bachelor of Education from Stockholms Universitet.<br />
              Bachelor of Arts Spanish from Uppsala Universitet. <br/ > 
              </p>


          </motion.div>

          </div>
        

      
   
  )
}

export default About 