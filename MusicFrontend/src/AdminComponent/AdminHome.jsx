import React from 'react'
import './AdminHome.css'
import ContentHome from './ContentHome'
import NavHome from './NavHome'
import Cards from '../HomeComponent/Cards';
import { LogoutContext } from '../HomeComponent/LogoutContext';

function AdminHome() {
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