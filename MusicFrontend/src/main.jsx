import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import EditMusic from './AdminComponent/EditMusic'
// import AddMusic from './AdminComponent/AddMusic'
// import AdminHome from './AdminComponent/AdminHome'
import Landing from './LandingComponent/Landing'
import Home from './HomeComponent/Home'
import Login from  './LoginComponent/Login'
import Register from  './LoginComponent/Register'
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Landing/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Home" element={<Home/>}/>
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
