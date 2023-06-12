import React,{useState} from 'react'
import './style.css'
import video from '../assets/pexels-lui-smither-2531140-1920x1080-24fps.mp4'
function Login() {
  return (
        <div className="main">
            <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
            <div className="session">
          <div className="left">
          </div>
          <form action="" className="log-in" autoComplete="off">
            <h4>We are <span>MUZIX</span></h4>
            <p>Welcome back! Log in to your account</p>
            <div className="floating-label">
              <input
                placeholder="Username"
                type="username"
                name="username"
                id="username"
                autoComplete="off"
              />
              <label htmlFor="username">Username:</label>
            </div>
            <div className="floating-label">
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
              />
              <label htmlFor="password">Password:</label>
            </div>
            <button type="submit" onClick={() => { return false; }}>Log in</button>
          </form>
        </div>
        </div>
        
  )
}

export default Login