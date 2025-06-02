import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modalcode.scss";
import figma from '../assets/images/figma.png'
import bootstrap from '../assets/images/bootstrap.png'
import javascript from '../assets/images/js.png'
import react from '../assets/images/react.png'
import api from '../assets/images/api.png'


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
                <h1 style={{color:'#fff'}}>MOVIE WEBAPPLICATION</h1>
              </div>


              <div className="modal-content">
              <h5> PROJEKTÖVERSIKT</h5>

                <p>Projektet var en kombination av moderna webbutvecklingstekniker för att skapa en interaktiv och 
                  användarvänlig webbapplikation. Genom att använda Figma för att skapa en prototyp, React för komponenthantering, 
                  OMDb API för 
                  hämtning av data, Bootstrap för styling och Netlify för distribution, skapades en stabil 
                  grund för vidare utveckling av applikationen.
                </p>
                <br></br>
                <br></br>

                <h5> KOMPETENSER</h5>

                <div className="tools-used">
                    <div className="tool">
                      <img src={react} alt="React" />
                      <span className="tool-name">React</span>
                    </div>
                    <div className="tool">
                      <img src={javascript} alt="JavaScript" />
                      <span className="tool-name">JavaScript</span>
                    </div>
                    <div className="tool">
                      <img src={api} alt="API" />
                      <span className="tool-name">API</span>
                    </div>
                    <div className="tool">
                      <img src={figma} alt="Figma" />
                      <span className="tool-name">Figma</span>
                    </div>
                    <div className="tool">
                      <img src={bootstrap} alt="Bootstrap" />
                      <span className="tool-name">Bootstrap</span>
                    </div>
                  </div>

                
                <div className='play'>
                <a href="https://cepedamovieapp.netlify.app/" target="_blank" rel="noreferrer">
                GO TO APP
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
