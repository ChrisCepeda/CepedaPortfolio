import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modalcode.scss";
import ui from '../assets/images/design.png'
import figma from '../assets/images/figma.png'
import miro from '../assets/images/miro-2.svg'
import ux from '../assets/images/ux-design.png'
import byteberryfile from '../assets/ByteBerryLandingpage.pdf'


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
                <h4>PROJECT OVERVIEW</h4>
                <p> Create a modern and visually engaging landing page for an IT company using Figma. 
                   The landing page showcase the company's expertise, services, and portfolio, 
                   offering a user-friendly experience that encourages visitors to learn more about 
                   the company. The design will feature a clean and professional layout, 
                   incorporating the company's branding elements. 
                </p>
                <h4>PROJECT PROCESS</h4>
                <p>     • Empathize - Researched how and what the company staff felt about the current website.
                        • Define - Stated needs and problems of the current website.
                        • Ideation - Brainstormed and created ideas of new layout and design. 
                        • Wireframing - Prototyping sceleton, exploring user and client concepts.
                        • Prototype - Createx solutions</p>
                
                The Figma design phase will involve wireframing, prototyping, and iterating on visual elements to create a user-centric landing page.
                
                <h4>TECHNOLOGY STACK</h4>
                <div className="tools-used">
                <img src={ui} alt='ui'/>
                <img src={ux} alt='ux'/>
                <img src={miro} alt='miro'/>
                <img src={figma} alt='figma'/>
          

                </div>
                
                <div className='play'>
                <a href={byteberryfile} target="_blank">
                OPEN PDF
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
