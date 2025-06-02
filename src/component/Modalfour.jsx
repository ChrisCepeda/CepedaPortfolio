import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modalcode.scss";
import figma from '../assets/images/figma.png'
import javascript from '../assets/images/js.png'
import miro from '../assets/images/miro-2.svg'
import git from '../assets/images/git.png'
import ui from '../assets/images/design.png'


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
      <button className='button-modal' onClick={() => setModalIsOpen(true)}/>
    

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
              onClick={(e) => e.stopPropagation()} // förhindrar att klick inuti stänger
            >
           {/* Stäng-knapp (kryss) */}
                    <button
                        className="modal-close"
                        onClick={() => setModalIsOpen(false)}
                        aria-label="Close"
                      >
                        &times;
                      </button>

              <div className="modal-header">
              <h1 style={{color:'#fff'}}>MEMORY GAME</h1>
              </div>

              <div className="modal-content">
              <h5>PROJEKTÖVERSIKT</h5>
                <p>Ett av mina första projekt med syfte att samarbeta i team och
                klassiskt memory-spel utvecklat med vanilla JavaScript, där användaren matchar 
                kort med identiska symboler. Syftet var att öva på interaktivitet, DOM-manipulation och spel-logik. 
                Designen togs fram i Figma och samarbetet skedde via Git och GitHub för versionshantering och kollaboration i team 
                </p>
                <br></br>
                <br></br>
              
                
                <h5> KOMPETENSER</h5>

         <div className="tools-used">
         <div className="tool">
                <img src={ui} alt='ui'/>
                <span className="tool-name">UI</span></div>

          <div className="tool">
                <img src={miro} alt='miro'/>
                <span className="tool-name">Miro</span>
                </div>
            <div className="tool">
                <img src={figma} alt='figma'/>
                <span className="tool-name">Figma</span>
                </div>
                <div className="tool">
          <img src={git} alt='GIT'/>
                <span className="tool-name">GIT</span>
                </div>
          <div className="tool">
                <img src={javascript} alt='javascript'/>
                <span className="tool-name">Javascript</span></div>
          </div>
                
                <div className='play'>
                <a href='https://tranquil-toffee-3f7e41.netlify.app/' target="_blank" rel="noreferrer">
                PLAY GAME
                </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
