import React from 'react'
import './Banner.scss'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <div className='banner-section'>

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
         <p> FRONTEND DEVELOPMENT <br></br>
          Bygger moderna, responsiva webbplatser med fokus på användarupplevelse. <br></br>
            Kodar med känsla för design.</p> 
          </div>
        </motion.div>

        <motion.div 
          className='banner-card-two'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="banner-card-bg bg-two" />
          <div className="banner-card-content">
            <p>UX/UI <br></br>
            Designar gränssnitt som känns intuitiva och engagerande. 
            Användaren står alltid i centrum för varje beslut.</p>
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
            <p>UTBILDNING<br></br>
            Lång erfarenhet av pedagogik och didaktik med fokus på språkutveckling och multimodalt lärande. 
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
            <p>DESIGN<br></br>
            Driver kreativa projekt från skiss till färdig produkt. 
            Förenar stil, funktion och hanterar hela kedjan från produktion till kund.</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Banner
