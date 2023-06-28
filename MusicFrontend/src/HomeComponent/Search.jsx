import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import SearchContents from './SearchContents'
function Search() {
  return (
    <div className="player">
    <div className="playerBody">
    <Sidebar />
    <Header/>
    <SearchContents/>
    </div>
    <Footer/>
    </div>
  )
}

export default Search