import React from 'react'
import './Aboutmebanner.scss'
import { motion } from 'framer-motion'


function Aboutmebanner() {
  return (

<section className="about-section">
  <div className="about-row">
    <div className="about-text">
     <motion.div 
        initial={{x:-20, opacity: 0,}}
         whileInView={{x:0, opacity: 1}}
         viewport={{ once: true }}
         transition={{delay:2, duration:1.5, ease:'easeIn'}}
        >
      <p> Design och kreativitet genomsyrar alla mina roller.
         Oavsett om jag arbetar med att utveckla tekniska projekt, designa undervisning eller skapa kläder ligger fokus alltid på form, funktion och idé.
     
        Genom alla mina uppdrag har jag drivits av samma sak: att skapa genomtänkta lösningar där form, funktion och struktur samspelar.
              <br />

        <br />Med en djup passion för språk, lärande och utveckling har jag arbetat med 
            undervisning sedan 2010. 
          Har vidareutbildat mig inom programmering med ett intresse för att kombinera 
          teknik och lärande och utveckla förmågan att skapa inkluderande, 
          effektiva och engagerande lärmiljöer – digitala och fysiska.
        <br /> <br />
            Jag tror starkt på ett livslångt lärande och strävar ständigt 
            efter att utveckla mina färdigheter, både för att växa som yrkesperson 
            och för att bidra till inkluderande och dynamiska miljöer. 
               <br />

        <br />
        Mejla eller hör av dig via sociala om du vill komma i kontakt!
        </p>
        
      <a href="mailto:hello@cepeda.se">
              <motion.button className='about-button'
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               >
               <p>@mail</p>  
               </motion.button>
               </a> 
              </motion.div>

       
    </div>
</div>
</section>
  )
}

export default Aboutmebanner