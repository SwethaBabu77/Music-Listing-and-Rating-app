import React from 'react'
import './AdminHome.css'
import ContentHome from './ContentHome'
import NavHome from './NavHome'
function AdminHome() {
    return (
        <div className='whole1'>
            <NavHome/>
            <h1 className='AdminTitle'>WELCOME ADMIN</h1>
            <ContentHome/>
        </div>
    )
}

export default AdminHome