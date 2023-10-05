import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modalcode.scss";
import figma from '../assets/images/figma.png'
import css from '../assets/images/css2.png'
import javascript from '../assets/images/js.png'
import html from '../assets/images/html.png'
import git from '../assets/images/git.png'
import github from '../assets/images/githubicon.png'


export default function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4
      }
    }
  };
  return (
    <div className="modals">
      <button className='button-modal' onClick={() => setModalIsOpen(true)}>
      </button>
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="modal-overlay"
          >
            <motion.div
              className="modal"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
            >
              <div className="modal-header">
                <h3 className="modal-title">ABOUT MEMORY GAME</h3>
              </div>

              <div className="modal-content">
                <h4>🗂️PROJECT OVERVIEW</h4>
                <p>In this project we created a memory game and used the browsers localstorage
                  to register score and time. 
                </p>
                <h4>PROJECT PROCESS</h4>
                <p> • Ideation - Brainstorming <br></br>
                    • UX & Design - Sketch & Visual Design <br></br> 
                    • Development - Code and Style </p>
                
                
                <h4>⚙️TECHNOLOGY STACK</h4>
                <div className="tools-used">
                <img src={figma} alt='figma'/>
                <img src={html} alt='html'/>
                <img src={css} alt='css'/>
                <img src={javascript} alt='javascript'/>
                <img src={git} alt='git'/>
                <img src={github} alt='github'/>

                </div>
                
                <div className='play'>
                <a href="https://tranquil-toffee-3f7e41.netlify.app/" target="_blank">
                PLAY GAME
                </a>
                </div>

                </div>

              <div className="modal-footer">
                <button
                  className="modal-button"
                  onClick={() => setModalIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
