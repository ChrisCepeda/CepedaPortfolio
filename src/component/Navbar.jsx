import { useState, useEffect } from 'react' 
import './Navbar.scss'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import SideNav from './SideNav/SideNav.js'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20) // ändra 20 till hur känsligt du vill ha det
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

return(

    <div className={`Nav ${scrolled ? 'scrolled' : ''}`}>
      
    <div className="Navbar-data">

      <div className="title">
          <h1>CHRISTINA CEPEDA</h1>
      </div>

   

      <div  className="nav-links">
        <ul>
            <li><NavLink to="/Projects" activeclassname="active">PORTFOLIO</NavLink></li>
            <li><NavLink to="/Blog" activeclassname="active">GALLERY</NavLink></li>
            <li><NavLink to="/About" activeclassame='active'>ABOUT</NavLink></li>
            <li><NavLink to="/Home" activeclassname='active'>
           <FaHome size={26} style={{verticalAlign:'bottom'}}  />
            </NavLink></li>
        </ul>
      </div>
      <SideNav />
     
  </div>
        
</div>
)

}

export default Navbar

