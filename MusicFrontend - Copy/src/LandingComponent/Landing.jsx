import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Landing.css'
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <div className='LandingBody'>
       <div className='whole'>
      <div className='LNavbar'>
        <div className='Lleft'>
          <Link to=""><img className='LLogo' src="/src/assets/logo.png" alt="logo" /></Link>
        </div>
        <div className="Lright">
          <input type="checkbox" hidden="hidden" id="myLabel"/>
          <label className="switch" htmlFor="myLabel"></label>
        </div>
      </div>
      <div className="LContent">
        <div className="Lcontainer1">
          <img className="LLanding" src="/src/assets/landd.png" alt="" srcset="" />
          <p className='LBackgroundTitle'>Play the Music</p>
          <h5 className='Lh5'>Let the music be your guide</h5>
          <Link to='/Login' className='Lloginn'>Login</Link>
        </div>
      </div>

      <footer className='landFooter'>
        <p>Copy@2023</p>
      </footer>
    </div>
    </div>
   
  )
}

export default Landing