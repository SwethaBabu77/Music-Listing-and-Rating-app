import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './Home.css' 
import Header from './Header'
function home() {
  return (
    <div className="player">

        <div className="playerBody">
            <Sidebar/>
            <Header/>
            <Body/>
        </div>
          <Footer/>
    </div>
  )
}

export default home