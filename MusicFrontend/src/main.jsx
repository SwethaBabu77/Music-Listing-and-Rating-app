import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminHome from "./AdminComponent/AdminHome";
import Landing from "./LandingComponent/Landing";
import Home from "./HomeComponent/Home";
import Login from "./LoginComponent/Login";
import Register from "./LoginComponent/Register";
import AddMusic from "./AdminComponent/AddMusic";
import ViewAllMusic from "./AdminComponent/ViewAllMusic";
import EditMusic from "./AdminComponent/EditMusic";
import DeleteMusic from "./AdminComponent/DeleteMusic";
import AllSongs from "./HomeComponent/AllSongs";
import Search from "./HomeComponent/Search";
import UserAccount from "./HomeComponent/UserAccount";
import UserEditdetails from "./HomeComponent/UserEditdetails";
import { LogoutContext } from "./HomeComponent/LogoutContext";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [isLoggedOut, setIsLoggedOut] = React.useState(false);
  const [Message,setMessage]=React.useState('')
  return (
    <ChakraProvider>
    <LogoutContext.Provider value={{ isLoggedOut, setIsLoggedOut,Message,setMessage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/Home">
            <Route index element={<Home />} />
            <Route path="/Home/AllSongs" element={<AllSongs />} />
            <Route path="/Home/Search" element={<Search />} />
            <Route path="/Home/User" element={<UserAccount />} />
            <Route path="/Home/EditDetails" element={<UserEditdetails />} />
          </Route>

          <Route path="/Admin">
            <Route index element={<AdminHome />} />
            <Route path="/Admin/Addmusic" element={<AddMusic />} />
            <Route path="/Admin/ViewMusic" element={<ViewAllMusic />} />
            <Route path="/Admin/EditMusic" element={<EditMusic />} />
            <Route path="/Admin/DeleteMusic" element={<DeleteMusic />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LogoutContext.Provider>
    </ChakraProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
