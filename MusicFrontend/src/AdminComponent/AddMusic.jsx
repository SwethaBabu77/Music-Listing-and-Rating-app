import React from 'react'
import NavHome from './NavHome'
import './AdminHome'
import './AddMusic.css'
function AddMusic() {
  return (
    <div className='whole1'>
      <NavHome/>
      <div className="card2">
        <p className='cardTitle'>ADD MUSIC</p>
        <div className="addbutton">
          <button className='upload'>Upload Music</button>
        </div>
    </div>
    </div>
  )
}

export default AddMusic