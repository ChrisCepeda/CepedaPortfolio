import React from 'react'
import './Aboutme.scss'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'


const About = () => {
  return (

    <div className='about-hero'>
    <div className='about-container'>
     <motion.div
     initial={{y:100, opacity: 0,}}
     animate={{y:0, opacity: 1,}}
     transition={{duration:0.5, ease:'easeIn'}}
     
     ><h1>ABOUT <br></br>CHRISTINA</h1>
     </motion.div> 
    </div>

    
    <div className='about-wrapper'>
          
          <motion.div className='about-cardone'
            initial={{y:100, opacity: 0,}}
            animate={{y:0, opacity:1}}
            transition={{delay:1.0, duration:0.8, ease:'easeIn'}}>
          
            <h1>01</h1>
            <h4>FRONTEND
            DEVELOPER</h4>
            <p>#1 📂 EXPERIENCE<br />
            I'm currently doing my internship as a Frontend Developer 
              at Lemontree, a Stockholm based IT-company with services in DevOps, TestOps, Development and Life Science. <br /> <br />
              
              #2 🦾 SKILLS <br />
              Constantly buildning applications with both front-and backend techstack. Collaborating in teams practising 
              an agile workflow through Kanban and Scrum methods. And implementing to the projects a design thinking through 
              User-Centerd design (UX) and layout design (UI).<br /> <br />
              

              #3 🎓 QUALIFICATIONS <br />
              March 2023 Diploma in Frontend Development from Hyper Island.</p><br /> <br />


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
      </div>
          


   
  )
}

export default About 