import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#d4d4d4",}} />
            <input type="text" placeholder='search for songs' name="" id="" />
        </div>
        <div className="headerRight">
            <h4>Swetha</h4>
            <FontAwesomeIcon icon={faUser} style={{color: "#ededed",}} />
        </div>
    </div>
  )
}

export default Header