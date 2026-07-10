import React from 'react'
import './Aboutme.scss'
import { motion } from 'framer-motion'
import christina from '../assets/images/cartoonme.png'



function Aboutme() {
  return (

    <div className='aboutme-section'>

       <motion.div className='animateone'
                     initial={{x:-20, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     viewport={{ once: true }}
                      transition={{delay:0.5, duration:2, ease:'easeIn'}}>

                <h4>About me</h4>
                </motion.div>       
            
        <div className='aboutme-container'>
       <motion.div className='image-chris'
         initial={{x:-20, opacity: 0,}}
         whileInView={{x:0, opacity: 1}}
         viewport={{ once: true }}
         transition={{delay:1, duration:1.5, ease:'easeIn'}}
        >
          
        <img className='chris' src={christina} alt='creativity'/>   
         </motion.div>

     </div>
   </div>
  )
};
    

export default Aboutme