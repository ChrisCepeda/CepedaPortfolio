import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modalcode.scss";
import figma from '../assets/images/figma.png'
import css from '../assets/images/css2.png'
import javascript from '../assets/images/js.png'
import react from '../assets/images/react.png'
import miro from '../assets/images/miro-2.svg'
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
              <h3 className="modal-title">ABOUT E-COMMERCE SITE</h3>
              </div>

              <div className="modal-content">
                <h4> 🗂️ PROJECT OVERVIEW</h4>
                <p>This project aims to develop a E-commerce website an Agile methodology. 
                  The primary focus is to ensure an efficent collaboration by 
                  the adoption of the Scrum framework- the frequent feedback and continuous improvement throughout the development 
                  lifecycle. 
                  
                  The iterative and incremental development process will ensure that the project stays on track and 
                  fosters effective communication.
                </p>
                <h4>💻 PROJECT PROCESS</h4>
                <p>
                • Empathize - Based on the product we wanted to sell, we did a researched and observed 
                potential users to gain insights into their preferences, behavior, and challenges related to online shopping.<br></br>
                • Define - Organization of the information and state users needs and problems. The 
                team created various personas to recognize the diferent needs of different people.<br></br>
                • Ideation - Brainstorming and generation of ideas. <br></br> 
                • Prototype - Create solutions <br></br>
                • Development - Code, debug and test </p>
                
                
                <h4>⚙️ TECHNOLOGY STACK</h4>
                <div className="tools-used">
                <img src={miro} alt='miro'/>
                <img src={figma} alt='figma'/>
                <img src={react} alt='react'/>
                <img src={css} alt='css'/>
                <img src={javascript} alt='javascript'/>
                <img src={git} alt='git'/>
                <img src={github} alt='github'/>

                </div>
                
                <div className='play'>
                <a href="https://tranquil-toffee-3f7e41.netlify.app/" target="_blank">
                VISIT GITHUB
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
