import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import workandcomputer from '../assets/images/workandcomputer.jpg'
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
          
        <img src={workandcomputer} alt='creativity'/>   
         </motion.div>

    
    <motion.div className='text-me'
       initial={{y:20, opacity: 0}}
       whileInView={{y:0, opacity: 1}}
       viewport={{ once: true }}
        transition={{delay:1, duration:0.5, ease:'easeIn'}}>
     
        <h1>Let's have a fika!</h1>
        <p>  Är du intresserad av ett samarbete inom utveckling, utbildning eller kläddesign?
             Min resa har tagit mig från att driva egen kläddesign- och importverksamhet till 
             webbutveckling och webbdesign, från klassrummet som lärare 
             till utbildningsledare på <a href="https://www.berattarministeriet.se"  className="custom-link" target="_blank" rel="noopener noreferrer">Berättarministeriet</a>. 
          </p>
          
        <p> Oavsett om det handlar om design, digitala lösningar eller pedagogiska koncept, 
           ser jag varje projekt som en chans att samarbeta, skapa värde och väcka engagemang.</p>
        <p>Har du ett projekt i tankarna – eller bara en idé som du vill bolla? Jag är nyfiken på att höra mer och hjälpa dig förverkliga den.
        </p>
      
        <p> Jag ser fram emot att ses – över en fika eller ett inspirerande samarbete.</p>
          
         <a href="mailto:hello@cepeda.se">
          <motion.button className='about-button'
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           >
           <p>KONTAKT</p>  
           </motion.button>
           </a> 
          </motion.div>
     </div>
   </div>
  )
};

export default About