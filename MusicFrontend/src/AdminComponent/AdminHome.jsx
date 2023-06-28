import React from 'react'
import './AdminHome.css'
import ContentHome from './ContentHome'
import NavHome from './NavHome'
import Cards from '../HomeComponent/Cards';
import { LogoutContext } from '../HomeComponent/LogoutContext';
import axios from 'axios';

function AdminHome() {
    React.useEffect(()=>{
        const payload = {
            method: "GET",
            url: "http://localhost:8085/api/auth/forAdmin",
            headers:{
              "Authorization":"Bearer "+localStorage.getItem("token")
            }
          };
    
          axios.request(payload).then(response=>{
            console.log(response.data)
          }).catch(error=>{
            console.log(error)
          })
    },[])
    const{Message,isLoggedOut,setIsLoggedOut}=React.useContext(LogoutContext);
    return (
        <div className='whole1'>
      {isLoggedOut && <Cards Message={Message} setIsLoggedOut={setIsLoggedOut}/>}
            <NavHome/>
            <h1 className='AdminTitle'>WELCOME ADMIN</h1>
            <ContentHome/>
        </div>
    )
}

export default AdminHome