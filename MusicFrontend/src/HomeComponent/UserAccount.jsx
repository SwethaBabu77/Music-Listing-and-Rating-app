import React from 'react'
import './AllSongs.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import UserContents from './UserContents'

function UserAccount() {
  return (
    <div className="player">
    <div className="playerBody">
    <Sidebar />
    <Header/>
    <UserContents/>
    </div>
    <Footer/>
    </div>
  )
}

export default UserAccount