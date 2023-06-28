import React, { useState } from "react";
import "./AllSongs.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import "./UserContent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LogoutContext } from "./LogoutContext";

function UserEditdetails() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const { setIsLoggedOut, setMessage } = React.useContext(LogoutContext);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      formData.append("image", image);
      const response = await axios.post("/api/updateUser", formData);

      setMessage("Login Successful Admin")
      setIsLoggedOut(true)
      console.log(response.data);
      

      setUsername("");
      setPassword("");
      setImage(null);

      navigate(-1); // Navigate back using the react-router-dom's useNavigate hook
    } catch (error) {
    setMessage("An error occurred Please try again.")
      console.error(error);
      
    }

    setUsername("");
    setPassword("");
    setImage(null);

    // Redirect back or perform any other necessary actions
  };

  function handleBackClick() {
    navigate("/Home/User");
  }

  return (
    <div className="player">
      <div className="playerBody">
        <Sidebar />
        <Header />
        <div className="UHomebody">
          <div className="UHomebodyInfoUser">
            <div className="Users">
              <div className="UserImage">
                <img
                  className="Avatar"
                  src="/src/assets/Avatar.png"
                  alt="Avatar"
                />
                <div className="AvatarName">
                  <h3>User</h3>
                </div>
                <div className="formfields">
                  <form className="EditForm" onSubmit={handleFormSubmit}>
                    <div className="UserFormfields">
                      <label className="UserfieldsLabel" htmlFor="Usernames">
                        Name:
                      </label>
                      <input
                        className="Userfieldsinput"
                        type="text"
                        id="Usernames"
                        required
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>

                    <div className="UserFormfields">
                      <label className="UserfieldsLabel" htmlFor="password">
                        Update Password:
                      </label>
                      <input
                        className="Userfieldsinput"
                        type="text"
                        id="password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>

                    <div className="UserFormfields">
                      <div>
                        <label
                          className="UserfieldsLabel"
                          htmlFor="UploadMusic"
                        >
                          Update Image:
                        </label>
                        <input
                          className="Userfieldsinput"
                          type="file"
                          accept="image/png, image/jpeg"
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
                    <div className="usersubmit">
                      <button className="userSubmit" type="submit">
                        Update
                      </button>
                      <button className="userBack" onClick={handleBackClick}>
                        Back
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserEditdetails;
