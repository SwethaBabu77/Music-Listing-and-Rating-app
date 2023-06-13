import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Landing.css'
function Landing() {
  return (
    <div className='whole'>
      <div className='Navbar'>
        <div className='left'>
          <img className='Logo' src="/src/assets/logo.png" alt="logo" />
        </div>
        <div className="right">
          <input type="checkbox" hidden="hidden" id="myLabel"/>
          <label className="switch" htmlFor="myLabel"></label>
        </div>
      </div>
      <div className="Content">
        <div className="container1">
          <img className="Landing" src="/src/assets/landd.png" alt="" srcset="" />
          <p className='BackgroundTitle'>Play the Music</p>
          <h5>Let the music be your guide</h5>
          <button className='loginn' type='submit'>Login</button>
        </div>
      </div>

      <footer className='landFooter'>
        <p>Copy@2023</p>
      </footer>
    </div>
  )
}

export default Landing