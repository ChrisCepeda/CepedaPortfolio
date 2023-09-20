import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modalcode.scss";
import ui from '../assets/images/design.png'
import figma from '../assets/images/figma.png'
import miro from '../assets/images/miro-2.svg'
import ux from '../assets/images/ux-design.png'


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
                <p>In this project the team was assigned to do a real B2B product. The client 
                  Doc Lounge specialises in documentary film distribution of new Nordic and 
                  international documentaries through events and outreach. They continuously work with development 
                  projects to innovate documentary distribution and the film screening experience.
                  The project was developed through the User Centered Design process 
                  with four phases: discover, define, develop and deliver. This iterative process 
                  made us discover and understand the context of use, then define the user requirements, 
                  develop solutions and finally deliver against the requirements. 
                </p>
                <h4>💻 PROJECT PROCESS</h4>
                <p>
                • Empathize - Based on the product we wanted to sell, we did a researched and observed 
                potential users to gain insights into their preferences, behavior, and challenges related to online shopping.<br></br>
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
                <a href="https://tranquil-toffee-3f7e41.netlify.app/" rel="noreferrer" target="_blank">
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
