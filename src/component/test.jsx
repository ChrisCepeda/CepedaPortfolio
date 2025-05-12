import React from 'react'
import './test.scss'
import profilbild from '../assets/images/profilbild.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <img src={profilbild} alt="Christina" className="overlay-photo" />
          <div className="text">
            <h1>Hej! Jag är Christina</h1>
            <p>Välkommen till min portfolio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default test