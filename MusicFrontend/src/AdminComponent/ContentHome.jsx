import React from 'react'
import { Link } from 'react-router-dom'
import './AdminHome.css'
function ContentHome() {
  return (
    <div className='Content1'>
    <Link className='link' to='/Admin/Addmusic'>
    <div class="card1">
        <img className='cardimage' src="/src/assets/admin1.png" alt="" />
        <p className='cardTitle'>ADD MUSIC</p>
    </div></Link>


    <Link className='link' to='/Admin/ViewMusic'>
    <div class="card1">
    <img className='cardimage'src="/src/assets/admin2.png" alt="" />
        <p className='cardTitle'>VIEW ALL MUSIC</p>
    </div></Link>


    <Link className='link' to='/Admin/EditMusic'>
    <div class="card1">
    <img className='cardimage' src="/src/assets/admin3.png" alt="" />
        <p className='cardTitle'>EDIT DETAILS</p>
    </div></Link>


    <Link className='link' to='/Admin/DeleteMusic'>
    <div class="card1">
    <img className='cardimage' src="/src/assets/admin4.png" alt="" />
        <p className='cardTitle'>DELETE MUSIC</p>
    </div>
    </Link>
</div>
  )
}

export default ContentHome