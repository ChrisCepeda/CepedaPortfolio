
import './Navbar.scss'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import SideNav from './SideNav/SideNav.js'

const Navbar = () => {

return(


    <div className='Nav'>
        
    <div className="Navbar">

      <div className="title">
          <h1>CHRISTINA CEPEDA</h1>
      </div>

   

      <div  className="nav-links">
        <ul>
            <li><NavLink to="/Projects" activeclassname="active">PROJECTS</NavLink></li>
            <li><NavLink to="/Blog" activeclassname="active">BLOG</NavLink></li>
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

