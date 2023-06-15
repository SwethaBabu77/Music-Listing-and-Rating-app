import React from 'react'
import './AdminHome.css'
function ContentHome() {
  return (
    <div className='Content1'>
    <div class="card1">
        <img className='cardimage' src="/src/assets/admin1.png" alt="" srcset="" />
        <p className='cardTitle'>ADD MUSIC</p>
    </div>

    <div class="card1">
    <img className='cardimage'src="/src/assets/admin2.png" alt="" srcset="" />
        <p className='cardTitle'>VIEW ALL MUSIC</p>
    </div>

    <div class="card1">
    <img className='cardimage' src="/src/assets/admin3.png" alt="" srcset="" />
        <p className='cardTitle'>EDIT DETAILS</p>
    </div>

    <div class="card1">
    <img className='cardimage' src="/src/assets/admin4.png" alt="" srcset="" />
        <p className='cardTitle'>DELETE MUSIC</p>
    </div>
</div>
  )
}

export default ContentHome