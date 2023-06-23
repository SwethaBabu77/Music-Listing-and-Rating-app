import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Header.css';

function Header() {
  const options = ['Option 1', 'Option 2', 'Option 3']; // Example dropdown options

  return (
    <div className="header">
      <Link to="/Home/Search">
        <div className="headerLeft">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#d4d4d4" }} />
          <input type="text" className='searchmusix' placeholder='search for songs' name="" id="" />
        </div>
      </Link>
      <div className="headerRight">
        <p className='myname'>Swetha</p>
        <FontAwesomeIcon icon={faUser} style={{ color: "#ededed" }}/>
        <Dropdown options={options}></Dropdown>
        <Link to="/Home/User"></Link>
      </div>
    </div>
  );
}

export default Header;
