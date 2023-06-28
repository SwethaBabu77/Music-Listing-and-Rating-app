import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.css";
import { LogoutContext } from "./LogoutContext";
import { useNavigate } from "react-router-dom";
import SearchContents from "./SearchContents";



function Header() {
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const { setIsLoggedOut,setMessage } = React.useContext(LogoutContext);
  const navigate = useNavigate();
  const[searchQuery,setSearchQuery]=useState("");

  const handleSearchBarFocus = () => {
    setIsSearchBarFocused(true);
  };

  const handleSearchBarBlur = () => {
    setIsSearchBarFocused(false);
  };

  const handleSearchInputChange=(e)=>{
    setSearchQuery(e.target.value);
  }

  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;

    if (selectedOption === "logout") {

      localStorage.clear();
      setMessage("Log out successfully")
      setIsLoggedOut(true);

      navigate('/')
    }
    else if(selectedOption==="myAcc"){
      navigate('/Home/User')
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
            value={searchQuery}
            onChange={handleSearchInputChange}
            name=""
            id=""
          />
        </div>
      </Link>
      <div className="headerRight">
        <div className="customDropdown">
          <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />
          <select className="Options" onChange={handleDropdownChange}>
            <option className="optionuser">Swetha</option>
            <option className="optionuser" value="myAcc">My Account</option>
            <option className="optionuser" value="logout">Log Out</option>
          </select>
        </div>
        <Link className="link" to="/Home/User"></Link>
      </div>

      {/* <SearchContents searchQuery={searchQuery}/> */}
    </div>
  );
}

export default Header;
