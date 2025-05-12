import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Work from '../component/Work'
import Banner from '../component/Banner'
import Techstack from '../component/techstack'



const Home = () => {
  return (
    <div className='home'>
     <Hero />
     <Banner/>
     <About/>
     <Techstack />
     <Work/>

    </div>
  )
}

export default Home