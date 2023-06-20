import React, { useState } from 'react';
import './style.css';
import video from '../assets/pexels-lui-smither-2531140-1920x1080-24fps.mp4';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const [userName, setUsername] = useState('');
  const [userPassword, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const adminCredentials = {
    userName: 'admin',
    userPassword: 'admin123'
  };
  const userCredentials = {
    userName: 'user',
    userPassword: 'user123'
  };

  function handleLogin(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload={
      userName:userName,
      userPassword:userPassword
    }
    axios.post('http://localhost:9090/authenticate',payload).then((response)=>{
      if(response.status === 200){
        const userType= response.data.userType;
        if(userType==='Admin'){
          navigate('/Admin');
        }else if(userType==='User'){
          navigate('/Home');
        }else{
          alert('Invalid user type');
        }
      }
      else{
        alert('Login failed');
      }
    })
    .catch(error=>{
      console.log(error);
      alert("An error occurred during login");
    });
  

    if (userName === adminCredentials.userName && userPassword === adminCredentials.userPassword) {
      // Redirect to admin component
      navigate('/Admin');
    } else if (userName === userCredentials.userName && userPassword === userCredentials.userPassword) {
      // Redirect to user component
      navigate('/Home');
    } else {
      alert('Invalid username or password');
    }
  }

  function validateForm() {
    let isValid = true;

    // Reset previous error messages
    setUsernameError('');
    setPasswordError('');

    // Validate username
    if (!userName.trim()) {
      setUsernameError('Username is required');
      isValid = false;
    }

    // Validate password
    if (!userPassword.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    }

    return isValid;
  }

  return (
    <div className="Lomain">
      <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <Link to="/">
        <img className="LoLogo" src="/src/assets/logo.png" alt="logo" />
      </Link>

      <div className="Losession">
        <div className="Loleft"></div>
        <form action="" className="login" autoComplete="off" onSubmit={handleLogin}>
          <h4 className="h4Lo">
            We are <span>MUZIX</span>
          </h4>
          <p>Welcome back! Log in to your account</p>
          <p>
            Not before <Link to="/Register">Register with US</Link>
          </p>
          <div className="floating-label">
            <input
              className="Loinput"
              placeholder="Username"
              type="username"
              name="userName"
              id="username"
              autoComplete="off"
              value={userName}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label className="lolabel" htmlFor="userName">
              Username:
            </label>
            {usernameError && <div className="error-message">{usernameError}</div>}
          </div>
          <div className="floating-label">
            <input
              className="Loinput"
              placeholder="Password"
              type="password"
              name="userPassword"
              id="password"
              autoComplete="off"
              value={userPassword}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label className="lolabel" htmlFor="userPassword">
              Password:
            </label>
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>
          <button type="submit" className="Loginbb">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
