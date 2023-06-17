import React,{useState} from 'react'
import './style.css'
import video from '../assets/pexels-lui-smither-2531140-1920x1080-24fps.mp4'
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')
  const navigate =useNavigate();

  const payload={
    userName: username,
    userPassword: password
  }
  

  function handleLogin(event){
    event.preventDefault();

    const adminCredentials = {
      username: 'admin',
      password: 'admin123'
    };
    const userCredentials = {
      username: 'user',
      password: 'user123'
    };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      // Redirect to admin component

      navigate('/Admin');
    } else if (username === userCredentials.username && password === userCredentials.password) {
      // Redirect to user component

      navigate('/User');
    } else {
      alert('Invalid username or password');
    }

  }
  return (
        <div className="Lomain">
            <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
            <div className="Losession">
          <div className="Loleft">
          </div>
          <form action="" className="login" autoComplete="off" onSubmit={handleLogin}>
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
                value={username}
                onChange={(event)=> setUsername(event.target.value)}
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
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
              />
              <label className='lolabel' htmlFor="password">Password:</label>
            </div>
           <button type="submit" className='Loginbb'>Log in</button>
          </form>
        </div>
        </div>
        
  )
}

export default Login