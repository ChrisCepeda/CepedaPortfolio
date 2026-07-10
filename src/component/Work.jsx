import React from 'react'
import './Work.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Modalone from './Modalone'
import Modaltwo from './Modaltwo'
import Modalthree from './Modalthree'
import Modalfour from './Modalfour'
import didaktik from '../assets/images/didaktik.png'
import pedagogik from '../assets/images/pedagogik.png'
import ux from '../assets/images/ux-design.png'
import ui from '../assets/images/design.png'
import miro from '../assets/images/miro-2.svg'
import figma from '../assets/images/figma.png'
import css from '../assets/images/css2.png'
import react from '../assets/images/react.png'
import javascript from '../assets/images/js.png'
import html from '../assets/images/html.png'
import api from '../assets/images/api.png'
import bootstrap from '../assets/images/bootstrap.png'
import git from '../assets/images/git.png'
 


const Work = () => {
  return (
    <div className='work'>

         <motion.div
            initial={{x:20, opacity: 0,}}
            whileInView={{x:0, opacity: 1,}}
            viewport={{ once: true }}
            transition={{duration:0.5, ease:'easeIn'}}
            >
              <h4>  PORTFOLIO</h4>
            </motion.div> 

      <div className='work-container'>
    
         

      <div className='work-wrapper'>
     
      <motion.div className='work-cardone'
        initial={{x:20, opacity: 0}}
        whileInView={{x:0, opacity:1}}
        viewport={{ once: true }}
        transition={{delay:1, duration:.3, ease:'easeIn'}}>
         
         < Modalone />
        <h3>GBG UNIVERSITET</h3>
        <p>Lärarutbildningen</p>
        <div className='tech-stack'>
        <img src={didaktik} alt='didaktik'/>
        <img src={pedagogik} alt='pedagogik'/>
       </div>
       
    
  </motion.div>

  <motion.div className='work-cardtwo'
        initial={{x:20, opacity: 0}}
        whileInView={{x:0, opacity:1}}
        viewport={{ once: true }}
        transition={{delay:1, duration:.5, ease:'easeIn'}}>
         
         < Modaltwo />
        <h3>LANDING PAGE</h3>
        <p>Landing page prototyp</p>
       
        <div className='tech-stack'>
        <img src={ui} alt='ui'/>
        <img src={ux} alt='ux'/>
        <img src={miro} alt='miro'/>
        <img src={figma} alt='figma'/>

    </div>
  </motion.div>



  <motion.div className='work-cardthree'
        initial={{x:20, opacity: 0}}
        whileInView={{x:0, opacity:1}}
        viewport={{ once: true }}
        transition={{delay:1.5, duration:.5, ease:'easeIn'}}>
         
         < Modalthree />
        <h3>MOVIE WEBAPP</h3>
        <p> Webbapplikation </p>
       
        <div className='tech-stack'>
        <img src={figma} alt='figma'/>
        <img src={react} alt='React'/>
        <img src={api} alt='API'/>
        <img src={bootstrap} alt='bootstrap'/>
        
    </div>
  </motion.div>

  <motion.div className='work-cardfour'
        initial={{x:20, opacity: 0}}
        whileInView={{x:0, opacity:1}}
        viewport={{ once: true }}
        transition={{delay:2, duration:.5, ease:'easeIn'}}>
         
         < Modalfour />
        <h3>MEMORY GAME</h3>
        <p> The cutest memory game ever </p>
       
        <div className='tech-stack'>
        
        <img src={html} alt='html'/>
        <img src={css} alt='css'/>
        <img src={javascript} alt='javascript'/>
        <img src={git} alt='git'/>

    </div>
  </motion.div>

  
      
       </div>

       <div className='till-projekt'>
       <Link to="/Projects">
        <motion.button className='about-button'
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
      >
      <p style={{color: '#fff'}}>más</p> 
       </motion.button>
        </Link>
        </div>
     </div>

      
  </div>
   
  )
}

export default Work