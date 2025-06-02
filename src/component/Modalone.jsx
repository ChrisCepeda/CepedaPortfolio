import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modalcode.scss";


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
                <h1 style={{color:'#fff'}}>GÖTEBORGS UNIVERSITET</h1>
              </div>

              <div className="modal-content">
                <h5>PROJEKTÖVERSIKT</h5>
                <p>Designat innehåll och lektioner för Berättarministeriets kursmomentet som integreras i lärarutbildningens 
                  svenskdidaktik för framtida lärare i åk F-6. Kursmomentet syftar till att stärka studenternas förståelse
                  för hur de kan arbeta med Storytelling i undervisningen och ge förutsättningar för en kreativ, fantasifull och 
                  språkutvecklande undervisningsmiljö. 
                  </p> <br></br>
                  <br></br>
                  <br></br>

                  <h5>KOMPETENSER</h5>
                  <p>#didaktik #pedagogik #språkutveckling #storytelling #lärarutbildning #kreativitet #undervisningsdesign</p>


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
