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
      <button className='button-modal' onClick={() => setModalIsOpen(true)} />
     
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="modal-overlay"
             onClick={() => setModalIsOpen(false)} // klick på bakgrund stänger
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
                <h1 style={{color:'#fff'}}>DOC LOUNGE LANDING PAGE</h1>
              </div>

              <div className="modal-content">
              <h5>PROJEKTÖVERSIKT</h5>
                <p>I projektet fick mitt team i uppdrag att ta fram en B2B-produkt. Doc Lounge
                  är specialiserad på distribution av nya nordiska och internationella dokumentärfilmer genom event 
                  och riktad kommunikation. Deras befintliga webbplats hade en mindre tilltalande grafisk design och var 
                  svårnavigerad, vilket resulterade till en dålig användarupplevelse. Vårt uppdrag var att skapa 
                  en prototyp av deras hemsida som kunde attrahera B2B-marknaden och stärka företagets 
                  digitala närvaro.
                </p>
                <br></br>
                <br></br>
      
    <h5> KOMPETENSER</h5>

         <div className="tools-used">
          <div className="tool">
                <img src={ui} alt='ui'/>
                <span className="tool-name">UI</span>
                </div>
          <div className="tool">
                <img src={ux} alt='ux'/>
                <span className="tool-name">UX</span></div>
          <div className="tool">
                <img src={miro} alt='miro'/>
                <span className="tool-name">Miro</span>
                </div>
            <div className="tool">
                <img src={figma} alt='figma'/>
                <span className="tool-name">Figma</span>
                </div>
          </div>
                
                <div className='play'>
                <a href={doclounge}  target="_blank" rel="noreferrer">
                OPEN PDF
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
