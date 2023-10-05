import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modalcode.scss";
import ui from '../assets/images/design.png'
import figma from '../assets/images/figma.png'
import miro from '../assets/images/miro-2.svg'
import ux from '../assets/images/ux-design.png'
import doclounge from '../assets/DocLounge.pdf'


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
                <h3 className="modal-title">DOCLOUNGE PROTOTYPE WEBSITE</h3>
              </div>
              <div className="modal-content">
              <h4> 🗂️ PROJECT OVERVIEW</h4>
                <p>In this project the team was assigned to do a B2B product. The client 
                  Doc Lounge specialises in documentary film distribution of new Nordic and 
                  international documentaries through events and outreach. Their current website lacked 
                  an appealing UI design and was hard to navigate, resulting into a non friendely user experience. 
                  My team had to create an responsive About and Contact page that could attract the B2B market.
                </p>
                <h4>🔩 PROJECT PROCESS</h4>
                <p>
                • Empathize - Based on the product we wanted to create, we researched and observed 
                potential users to gain insights into their preferences, behavior, and challenges 
                related to the existing website.<br></br>
                • Define - Organization of the information and state users needs and problems. The 
                team created various personas to recognize the diferent needs of different people.<br></br>
                • Ideation - Brainstorming and generation of ideas. <br></br> 
                • Wireframing - Prototype Sceleton, exploring user and client concepts.<br></br>
                • Prototype - Create solutions <br></br>
                • Delivery - Present the final solution to client. </p>
                
                
                <h4>⚙️ TOOL STACK</h4>
                <div className="tools-used">
                <img src={ui} alt='ui'/>
                <img src={ux} alt='ux'/>
                <img src={miro} alt='miro'/>
                <img src={figma} alt='figma'/>
          
                </div>
                
                <div className='play'>
                <a href={doclounge}  target="_blank">
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
