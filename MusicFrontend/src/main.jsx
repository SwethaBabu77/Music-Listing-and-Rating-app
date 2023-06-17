import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminHome from './AdminComponent/AdminHome'
import Landing from './LandingComponent/Landing'
import Home from './HomeComponent/Home'
import Login from  './LoginComponent/Login'
import Register from  './LoginComponent/Register'
// import AddMusic from './AdminComponent/AddMusic'
import ViewAllMusic from './AdminComponent/ViewAllMusic';
import AddMusicWithApi from './AdminComponent/AddMusicWithApi';
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Landing/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>

      <Route path="/User" element={<Home/>}/>

      <Route path="/Admin">
        <Route index element={<AdminHome/>}/>
        <Route path="/Admin/Addmusic" element={<AddMusicWithApi/>}/>
        <Route path="/Admin/ViewMusic" element={<ViewAllMusic/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
