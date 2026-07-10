import React from 'react'
import './Footer.scss'
import { FaInstagram, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { useState } from "react";
import {db} from '../firebase';
import { addDoc, collection } from 'firebase/firestore'
import { NavLink } from 'react-router-dom'




function Footer(){
const [input, setInput] = useState('');
const [message, setMessage] = useState('');



function submitHandler(e) {
  e.preventDefault()
  if (input === '') {
    return 
  }

  const emailCollRef = collection(db, 'email')
  addDoc(emailCollRef, {
    email: input,
    myDate: [ new Date() ]
    })

  .then(response =>{
    console.log(response)
  }).catch(error =>{
    console.log(error.message)
  })
  setInput('')
  setMessage('THANK YOU!')
  setTimeout(() => {
    setMessage('');
  }, 5000)
}

  return (
    <div className='footer'>
      <div className='footer-container'>

      <div className='contact'>
          
          <div className='footer-title'>
            <p>CONTACT ME</p>
          </div>

          <div className='footer-icons'>

            <div className='footer-linked'>
            <a href="https://linkedin.com/in/christina-cepeda-313099228/?trk=public_profile_samename-profile&originalSubdomain=se" 
             target="_blank" rel="noreferrer"> 
          <FaLinkedin size={26} style={{verticalAlign:'bottom'}}></FaLinkedin>
          </a></div>

            <div className='footer-mail'>
            <a href="mailto:hello@cepeda.se">
           <FaRegEnvelope size={26} style={{verticalAlign:'bottom'}}></FaRegEnvelope>
           </a></div>
          
          <div className='footer-github'>  
          <a href="https://github.com/ChrisCepeda" 
           target="_blank" rel="noreferrer"> 
           <FaInstagram size={26} style={{verticalAlign:'bottom'}}></FaInstagram>
           </a></div>

          </div>
      </div>

      <div className='footer-subscription'>
          <div className='footer-title'>
            <p>REQUEST MY CV</p>
          </div>
          <form onSubmit={submitHandler}>
            <input className='form' type="email" value={input} onChange={ e =>setInput(e.target.value)} />
            <button className='form-button' type="submit">Submit</button>
          </form>
          <div className='validation'>
          <h2>{message} </h2>
           </div>

           <div className="copyright">
             <a href="mailto:hello@cepeda.se">
            <p> 2026© CEPEDA.SE</p></a>
           </div>

      </div>

      <div className='social'>
      <div className='footer-title'>
            <p>EXPLORE</p>
          </div>
     
               <div  className="footer-links">
                 <ul>
                     <li><NavLink to="/Projects" activeclassname="active">PORTFOLIO</NavLink></li>
                     <li><NavLink to="/Blog" activeclassname="active">GALLERY</NavLink></li>
                     <li><NavLink to="/About" activeclassame='active'>ABOUT</NavLink></li>
                     <li><NavLink to="/Home" activeclassname='active'>HOME</NavLink> </li>
                    
                 </ul>
               </div>
      </div>

    </div>
    </div>
  )
};


export default Footer