import React, { useState } from 'react'
import './register.css'
import video from '../assets/pexels-suzy-hazelwood-2112426-1920x1080-30fps.mp4'
import axios from 'axios'
import Notification from './Notification'
import Alert from './Alert'

function Register() {
  const[registerFormData,setRegisterFormData] =useState({
    Useremail:'',firstName:'',lastName:'',password:'',accepted:false
  })

  const[userCreated,setUserCreated]=useState(false)
  const [errorMessage,setErrorMessage]=useState('');

  function register(event){
    event.target.disabled=true;
    if (
      registerFormData.Useremail.trim() === '' ||
      registerFormData.firstName.trim() === '' ||
      registerFormData.lastName.trim() === '' ||
      registerFormData.password.trim() === ''
    ){
      setErrorMessage('Please fill in all the fields')
      return;
    }

    //validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerFormData.Useremail)) {
     setErrorMessage('Please enter a valid email address');
      return;
    }

    //validate password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(registerFormData.password)) {
      setErrorMessage(
        'Please enter a password with at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character.'
      );
      return;
    }

    const payload={
      Useremail: registerFormData.Useremail,
      firstName: registerFormData.firstName,
      lastName: registerFormData.lastName,
      password: registerFormData.password
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
        <div className="Rmain">
          <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
            <div className="Rsession">
          <div className="Rleft">
          </div>
          <form action="" className="log-in" autoComplete="off">
            <h4 className='Rh4'>Register with <span>MUZIX</span></h4>
            <p className='Rpara'>Welcome to Muzix</p>
            <div className="floating-label">
              <input className='Rinput'
                placeholder="UserEmail"
                type="email"
                name="Useremail"
                id="Useremail"
                autoComplete="off"
                onChange={inputChange}
              />
              <label className='Rlabel' htmlFor="Useremail">UserEmail:</label>
            </div>
            <div className="floating-label">
              <input className='Rinput'
                placeholder="First Name"
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="off"
                onChange={inputChange}
              />
              <label className='Rlabel' htmlFor="firstName">First Name:</label>
            </div>

            <div className="floating-label">
              <input className='Rinput'
                placeholder="Last Name"
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="off"
                onChange={inputChange}
              />
              <label className='Rlabel' htmlFor="lastName">Last Name:</label>
            </div>

            <div className="floating-label">
              <input className='Rinput'
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={inputChange}
              />
              <label className='Rlabel' htmlFor="password">Password:</label>
            </div>
            {
              registerFormData.accepted &&(
              <button className='Rbutton' type="submit" onChange={inputChange} onClick={register}>Register</button>
            )}
            {
              errorMessage &&(<Alert message={errorMessage} type="error"/>)        
            }
            {
              userCreated &&(
              <div className='Rnotification'>
                <Notification status={userCreated}/>
              </div>
              )}
          </form>
        </div>
        </div>
        
      );
    }
  
export default Register