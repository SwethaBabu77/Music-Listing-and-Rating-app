import React from 'react'
import './AllSongs.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import ViewAllSongs from './ViewAllSongs'
function AllSongs() {
  return (
    <div className="player">
    <div className="playerBody">
    <Sidebar />
    <Header/>
    <ViewAllSongs/>
    </div>
    <Footer/>
    </div>
  )
}

export default AllSongs