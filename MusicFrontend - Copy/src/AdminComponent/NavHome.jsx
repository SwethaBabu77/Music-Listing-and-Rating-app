import React from 'react'
import './AdminHome.css'
import { Link } from 'react-router-dom'
function NavHome() {
  return (
    <div className='Navbar1'>
       <Link className='link' to='/Admin'>
    <div className='left'>
        <img className='Logo1' src="/src/assets/logo.png" alt="logo" />
    </div>
    </Link>
</div>
  )
}

export default NavHome