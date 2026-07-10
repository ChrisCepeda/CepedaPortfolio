import React from 'react';
import Masonry from '@mui/lab/Masonry';
import './Gallery.scss';
import { motion } from 'framer-motion'


// 1. Importera bilderna högst upp
import bil1 from '../assets/images/christina.jpg';
import natur1 from '../assets/images/newintro.jpg';
import stad1 from '../assets/images/profilbild.jpg';


// 2. Lägg till variabelnamnen i din array (utan citattecken!)
const images = [
  { id: 1, url: bil1, alt: 'Min coola bil' },
  { id: 2, url: natur1, alt: 'En fin skog' },
  { id: 3, url: stad1, alt: 'Stockholm i solnedgång' },
  { id: 4, url: bil1, alt: 'Min coola bil' },
  { id: 5, url: natur1, alt: 'En fin skog' },
];

function Gallery() {
  return (
    <div className='gallery-container'>

     <motion.div
      initial={{x:-20, opacity: 0}}
      whileInView={{x:0, opacity: 1}}
      viewport={{ once: true }}
      transition={{delay:1, duration:2, ease:'easeIn'}}>
      
      <h4>GALLERY</h4>
    </motion.div>

     <div className='masonry-section'>
     <motion.div
      initial={{x:-20, opacity: 0,}}
      whileInView={{x:0, opacity: 1,}}
      viewport={{ once: true }}
      transition={{delay:1.5, duration:2, ease:'easeIn'}}
      >
    <Masonry columns=
    {{ xs: 1, sm: 2, md: 3 }} 
    spacing={{ xs: 1, sm: 2 }}
    sx={{ justifyContent: 'center' }} >
      {images.map((img) => (
        <div key={img.id} className="gallery-item">
          {/* 3. React omvandlar automatiskt variabeln (img.url) till rätt lokal sökväg */}
          <img src={img.url} alt={img.alt} style={{ width: '100%', display: 'block' }} />
        </div>
      ))}
    </Masonry>
  
    </motion.div>
      </div>
    </div>
  );
}

export default Gallery;