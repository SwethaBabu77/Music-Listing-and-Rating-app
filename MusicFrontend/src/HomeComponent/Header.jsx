import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "react-dropdown/style.css";
import "./Header.css";
import { LogoutContext } from "./LogoutContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const { setIsLoggedOut,setMessage } = React.useContext(LogoutContext);
  
  const navigate = useNavigate();

  const handleSearchBarFocus = () => {
    setIsSearchBarFocused(true);
  };

  const handleSearchBarBlur = () => {
    setIsSearchBarFocused(false);
  };

  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;
    // Perform any necessary actions based on the selected option
    if (selectedOption === "logout") {
      // perform logout action, such as removing user session data
      // redirect to landing page
      setMessage("Log out successfully")
      setIsLoggedOut(true);

      navigate('/')
      // window.location.href = "/";
    }
  };

  return (
    <div className="header">
      <Link className="link" to="/Home/Search">
        <div
          className={`headerLeft ${isSearchBarFocused ? "searchFocused" : ""}`}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#d4d4d4" }}
          />
          <input
            type="text"
            className="searchmusix"
            placeholder="search for songs"
            onFocus={handleSearchBarFocus}
            onBlur={handleSearchBarBlur}
            name=""
            id=""
          />
        </div>
      </Link>
      <div className="headerRight">
        <div className="customDropdown">
          <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />
          <select className="Options" onChange={handleDropdownChange}>
            <option>Swetha</option>
            <option value="about">About Us</option>
            <option value="logout">Log Out</option>
          </select>
        </div>
        <Link className="link" to="/Home/User"></Link>
      </div>
      {}
    </div>
  );
}

export default Header;
