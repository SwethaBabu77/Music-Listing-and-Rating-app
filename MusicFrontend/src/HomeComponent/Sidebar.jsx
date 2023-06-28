import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import SidebarOptions from './SidebarOptions';
import { faMagnifyingGlass,faHouse,faUser} from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from '@chakra-ui/react';
import AboutUs from './AboutUs';

function Sidebar() {
const { isOpen, onToggle } = useDisclosure()
  return (
    // <div className='sidebar'>
    //   <img className='sidebarLogo' src="/src/assets/muzixlogo.png" alt="MuzixLogo"/>
    //   <SidebarOptions/>
    // </div>

    <aside className='sidebar'>
      <header className='sidebar-header'>
      <Link to="/Home"><img className='sidebarLogo' src="/src/assets/logo.png" alt=""/></Link>
      </header>
      <nav>
        <Link to="/Home">
        <button className='Homebutton'>
          <span className='home'>
            <i><FontAwesomeIcon icon={faHouse} /></i>
            <span><FontAwesomeIcon icon={faHouse} /></span><span>Home</span>
          </span>
        </button></Link>

        <Link to="/Home/Search">
        <button className='search-button'>
          <span>
            <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span><span>Search</span>
            
          </span>
        </button>
        </Link>

        <button className='Account-button' onClick={onToggle}>
          <span>
            <i><FontAwesomeIcon icon={faUser} /></i>
            <span><FontAwesomeIcon icon={faUser} /></span><span>About Us</span>
          </span>
        </button>

      </nav>
        {isOpen && <AboutUs onToggle={onToggle} />}
    </aside>
  )
}

export default Sidebar;
