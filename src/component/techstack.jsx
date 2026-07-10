import React from 'react'
import { motion } from 'framer-motion'
import './techstack.scss';

import figma from '../assets/images/figma.png'
import mongodb from '../assets/images/mongodb.png'
import css from '../assets/images/css2.png'
import react from '../assets/images/react.png'
import javascript from '../assets/images/js.png'
import html from '../assets/images/html2.png'
import firebase from '../assets/images/firebase.png'
import xampp from '../assets/images/xampp.png'
import wordpress from '../assets/images/wordpress.png'
import php from '../assets/images/php.png'
import api from '../assets/images/api.png'
import framermotion from '../assets/images/framermotion.png'
import git from '../assets/images/git.png'
import bootstrap from '../assets/images/bootstrap.png'


const icons = [
    { src: html, alt: 'HTML' },
    { src: css, alt: 'CSS' },
    { src: javascript, alt: 'JavaScript' },
    { src: react, alt: 'React' },
    { src: mongodb, alt: 'MongoDB' },
    { src: firebase, alt: 'Firebase' },
    { src: wordpress, alt: 'WordPress' },
    { src: php, alt: 'PHP' },
    { src: api, alt: 'API' },
    { src: xampp, alt: 'XAMPP' },
    { src: git, alt: 'GIT' },
    { src: figma, alt: 'Figma' },
    { src: framermotion, alt: 'FramerMotion' },
    { src: bootstrap, alt: 'Bootstrap' },
   
  ]
  
  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2
      }
    })
  }

  
function techstack() {
  return (
    <div className="techstack">
              <h4> TECH STACK</h4> 
              {icons.map((icon, i) => (
        <motion.div
          key={icon.alt}
          className="tech-icon-wrapper"
          custom={i}
          variants={iconVariant}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            style={{ filter: 'invert(1) brightness(2)' }}
            className="tech-icon"
          />
          <span className="tooltip">{icon.alt}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default techstack