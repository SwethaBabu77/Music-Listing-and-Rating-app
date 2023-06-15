import React,{useState} from 'react'
import './style.css'
import video from '../assets/pexels-lui-smither-2531140-1920x1080-24fps.mp4'
import { Link } from 'react-router-dom';
function Login() {
  return (
        <div className="Lomain">
            <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
            <div className="Losession">
          <div className="Loleft">
          </div>
          <form action="" className="log-in" autoComplete="off">
            <h4 className='h4Lo'>We are <span>MUZIX</span></h4>
            <p>Welcome back! Log in to your account</p>
            <p>Not before <Link to="/Register">Register with US</Link></p>
            <div className="floating-label">
              <input className='Loinput'
                placeholder="Username"
                type="username"
                name="username"
                id="username"
                autoComplete="off"
              />
              <label className='lolabel' htmlFor="username">Username:</label>
            </div>
            <div className="floating-label">
              <input className='Loinput'
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
              />
              <label className='lolabel' htmlFor="password">Password:</label>
            </div>
            <Link to="/Home"><button type="submit" className='Loginbb'>Log in</button></Link>
          </form>
        </div>
        </div>
        
  )
}

export default Login