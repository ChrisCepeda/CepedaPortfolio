import React from 'react'
import './Banner.scss'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <div className='banner-section'>

        <motion.div className='animateone'
                           initial={{y:40, opacity: 0}}
                           whileInView={{y:0, opacity: 1}}
                           viewport={{ once: true }}
                            transition={{delay:1, duration:1, ease:'easeIn'}}>
      
                         <h4> Creativity </h4>
                      </motion.div>
   
      <div className='banner-container'>

        <motion.div 
          className='banner-card-one'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="banner-card-bg bg-one" />
          <div className="banner-card-content">
         <p> FRONTEND DEVELOPMENT </p> 
          </div>
        </motion.div>



        <motion.div 
          className='banner-card-three'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="banner-card-bg bg-three" />
          <div className="banner-card-content">
            <p>UTBILDNING
          </p>
          </div>
        </motion.div>

        <motion.div 
          className='banner-card-four'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="banner-card-bg bg-four" />
          <div className="banner-card-content">
            <p>DESIGN
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Banner
