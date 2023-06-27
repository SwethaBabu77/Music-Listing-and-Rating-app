import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHome.css";
import { Link } from "react-router-dom";
import { LogoutContext } from "../HomeComponent/LogoutContext";


function NavHome() {
  const { setIsLoggedOut, setMessage } = React.useContext(LogoutContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setMessage("Log out successfully");
    setIsLoggedOut(true);

    navigate("/");
  };
  return (
    <div className="Navbar1">
      <Link className="link" to="/Admin">
        <div className="left">
          <img className="Logo1" src="/src/assets/logo.png" alt="logo" />
        </div>
      </Link>
      <div className="Aright">
        <button className="AdminButton" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavHome;
