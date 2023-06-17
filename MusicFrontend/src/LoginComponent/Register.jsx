import React, { useState } from 'react'
import './register.css'
import video from '../assets/pexels-suzy-hazelwood-2112426-1920x1080-30fps.mp4'
import axios from 'axios'
import Notification from './Notification'
import Alert from './Alert'

function Register() {


  const[registerFormData,setRegisterFormData] =useState({
    userName:'',userFirstName:'',userLastName:'',userPassword:'',accepted:false
  })

  const[userCreated,setUserCreated]=useState(false)
  const [errorMessage,setErrorMessage]=useState('');

  function register(event){
    event.target.disabled=true;
    // if (
    //   registerFormData.userName.trim() === '' ||
    //   registerFormData.userFirstName.trim() === '' ||
    //   registerFormData.userLastName.trim() === '' ||
    //   registerFormData.userPassword.trim() === ''
    // ){
    //   setErrorMessage('Please fill in all the fields')
    //   return;
    // }

    //validate email
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(registerFormData.userName)) {
    //  setErrorMessage('Please enter a valid email address');
    //   return;
    // }

    //validate password
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    // if (!passwordRegex.test(registerFormData.password)) {
    //   setErrorMessage(
    //     'Please enter a password with at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character.'
    //   );
    //   return;
    // }

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
            </div>
            {
              registerFormData.accepted &&(
              <button className='Rbutton' type="submit" onChange={inputChange} onClick={register}>Register</button>
            )}
            {
              errorMessage &&(<Alert message={errorMessage} type="error"/>)        
            }
            {/* {
              userCreated &&(
              <div className='Rnotification'>
                <Notification status={userCreated}/>
              </div>
              )} */}
          </form>
        </div>
        </div>
        
      );
    }
  
export default Register