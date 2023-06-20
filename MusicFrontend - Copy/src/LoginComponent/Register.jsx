import React, { useState } from 'react'
import './register.css'
import video from '../assets/pexels-suzy-hazelwood-2112426-1920x1080-30fps.mp4'
import axios from 'axios'
import Notification from './Notification'
import Alert from './Alert'
import {Link} from 'react-router-dom';
function Register() {


  const[registerFormData,setRegisterFormData] =useState({
    userName:'',userFirstName:'',userLastName:'',userPassword:'',accepted:false
  })

  const[userCreated,setUserCreated]=useState(false)
  const [errorMessage,setErrorMessage]=useState('');
  const[validationErrors,setValidationErrors]=useState({
    userNameError:'',
    userFirstNameError:'',
    userLastNameError:'',
    userPasswordError:''
  })
  function register(event){
    event.preventDefault();
    event.target.disabled=true;
    
    if(!validateFormData()){
      event.target.disabled=false;
      return;
    }

    const payload={
      userName: registerFormData.userName,
      userFirstName: registerFormData.userFirstName,
      userLastName: registerFormData.userLastName,
      userPassword: registerFormData.userPassword
    }
    

    axios.post('http://localhost:9090/registerNewUser',payload).then(
      response=>{
        console.log(response.status)
        if(response.status==201){
          console.log("User registration")
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

  function validateFormData() {
    let isValid = true;
    const errors = {
      userNameError: '',
      userFirstNameError: '',
      userLastNameError: '',
      userPasswordError: ''
    };

    // Validate email address
    if (!registerFormData.userName.trim()) {
      errors.userNameError = 'Email address is required.';
      isValid = false;
    } else if (!isValidEmail(registerFormData.userName)) {
      errors.userNameError = 'Invalid email address.';
      isValid = false;
    }
  
    // Validate first name
    if (!registerFormData.userFirstName.trim()) {
      errors.userFirstNameError = 'First name is required.';
      isValid = false;
    }
  
    // Validate last name
    if (!registerFormData.userLastName.trim()) {
      errors.userLastNameError = 'Last name is required.';
      isValid = false;
    }
  
    // Validate password
    if (!registerFormData.userPassword.trim()) {
      errors.userPasswordError = 'Password is required.';
      isValid = false;
    } else if (registerFormData.userPassword.length < 6) {
      errors.userPasswordError = 'Password must be at least 6 characters long.';
      isValid = false;
    }
  
    setValidationErrors(errors);
    return isValid;
  }

  function isValidEmail(email) {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);

  }
    return (
        <div className="Rmain">
          <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <Link to="/">
      <img className="ReLogo" src="/src/assets/logo.png" alt="logo" /></Link>
            <div className="Rsession">
              
          <div className="Rleft">
          </div>
          <form action="" className="login" autoComplete="off">
            <h4 className='Rh4'>Register with <span>MUZIX</span></h4>
            <p className='Rpara'>Welcome to Muzix</p>
            <div className="floating-label">
              <input className='Rinput'
                placeholder="UserEmail"
                type="email"
                name="userName"
                id="Useremail"
                autoComplete="off"
                onChange={inputChange}
              />
              <label className='Rlabel' htmlFor="userName">UserEmail:</label>
              {validationErrors.userNameError && (
              <div className="error-message">{validationErrors.userNameError}</div>
            )}
            </div>
            <div className="floating-label">
              <input className='Rinput'
                placeholder="First Name"
                type="text"
                name="userFirstName"
                id="firstName"
                autoComplete="off"
                onChange={inputChange}
              />
              <label className='Rlabel' htmlFor="userFirstName">First Name:</label>
              {validationErrors.userFirstNameError && (
    <div className="error-message">{validationErrors.userFirstNameError}</div>
  )}
            </div>

            <div className="floating-label">
              <input className='Rinput'
                placeholder="Last Name"
                type="text"
                name="userLastName"
                autoComplete="off"
                onChange={inputChange}
              />
              
              <label className='Rlabel' htmlFor="userLastName">Last Name:</label>
              {validationErrors.userLastNameError && (
    <div className="error-message">{validationErrors.userLastNameError}</div>
  )}

            </div>

            <div className="floating-label">
              <input className='Rinput'
                placeholder="Password"
                type="password"
                name="userPassword"
                id="password"
                autoComplete="off"
                onChange={inputChange}
              />
              <label className='Rlabel' htmlFor="userPassword">Password:</label>
              {validationErrors.userPasswordError && (
    <div className="error-message">{validationErrors.userPasswordError}</div>
  )}
            </div>
            {
              registerFormData.accepted &&(
              <button className='Rbutton' type="submit" onClick={register}>Register</button>
            )}
            {
              errorMessage && <Alert message={errorMessage} type="error"/>      
            }
            
            {
              userCreated &&(
              <div className='Rnotification'>
                <Notification status={userCreated}/>
                <p>User successfully registered!</p>
              </div>
              )}
          </form>
        </div>
        </div>
        
      );
    }
  
export default Register