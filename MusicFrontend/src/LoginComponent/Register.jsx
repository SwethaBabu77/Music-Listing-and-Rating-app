import React, { useState } from 'react'
import './register.css'
import video from '../assets/pexels-suzy-hazelwood-2112426-1920x1080-30fps.mp4'
import axios from 'axios'
import Notification from './Notification'

function Register() {
  const[registerFormData,setRegisterFormData] =useState({
    Username:'',password:'',accepted:false
  })

  const[userCreated,setUserCreated]=useState(false)

  function register(event){
    event.target.disabled=true
    const payload={
      Username:registerFormData.Username,
      password:registerFormData.password
    }
    

    axios.post('http://localhost:3000/users',payload).then(
      response=>{
        console.log(response.status)
        if(response.status==201){
          setUserCreated(true)
        }
      })
      .catch(err=>{
        setUserCreated(false)
        console.log(err)
      })
  }

  function inputChange(event){
    const{name,value}=event.target
    setRegisterFormData(prevState=>{
      return{
        ...prevState,
        [name]:value,
        accepted: true
      }
    })
    console.log(registerFormData)
    
  }
  
    return (
        <div className="main">
          <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
            <div className="session">
          <div className="left">
          </div>
          <form action="" className="log-in" autoComplete="off">
            <h4>Register with <span>MUZIX</span></h4>
            <p>Welcome to Muzix</p>
            <div className="floating-label">
              <input
                placeholder="Username"
                type="Username"
                name="Username"
                id="Username"
                autoComplete="off"
                onChange={inputChange}
              />
              <label htmlFor="Username">Username:</label>
            </div>
            <div className="floating-label">
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={inputChange}
              />
              <label htmlFor="password">Password:</label>
            </div>
            {
              registerFormData.accepted &&
              <button type="submit" onChange={inputChange} onClick={register}>Register</button>

            }
            {
              userCreated &&
              <div className='notification'>
                <Notification status={userCreated}/>
              </div>
              
            }
          </form>
        </div>
        </div>
        
      );
    }
  
export default Register