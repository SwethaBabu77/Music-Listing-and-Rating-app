import React, { useState } from "react";
import "./style.css";
import video from "../assets/pexels-lui-smither-2531140-1920x1080-24fps.mp4";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loaders from "../Loaders";
import { LogoutContext } from "../HomeComponent/LogoutContext";
function Login() {
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setIsLoggedOut, setMessage } = React.useContext(LogoutContext);
  const navigate = useNavigate();

  const adminCredentials = {
    userName: "admin",
    userPassword: "admin123",
  };
  const userCredentials = {
    userName: "user",
    userPassword: "user123",
  };

  function handleLogin(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // const payload = {
    //   method: "POST",
    //   url: "http://localhost:8085/authenticate",
    //   params: {
    //     userName: userName,
    //     userPassword: userPassword,
    //   },
    //   headers:{
    //     "Authorization":""
    //   }
    // };

    const payload = {
      userName: userName,
      userPassword: userPassword
    };

    axios
      .post("http://localhost:8085/api/auth/authenticate", payload)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          localStorage.setItem("token",response.data.jwtToken)
          const userType = response.data.user.role[0].roleName;
          if (userType === "Admin") {
            setMessage("Login Successful Admin");
            setIsLoggedOut(true);
            navigate("/Admin");
          } else if (userType === "User") {
            setMessage("Login Successful");
            setIsLoggedOut(true);
            navigate("/Home");
          } else {
            setMessage("Invalid user type");
            alert("Invalid user type");
          }
        } else {
          alert("Login failed");
          setMessage("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage("An error occurred during login");
        // alert("An error occurred during login");
      });

    // if (userName === adminCredentials.userName && userPassword === adminCredentials.userPassword) {
    //   setMessage("Login Successful Admin")
    //   setIsLoggedOut(true)
    //   // Redirect to admin component
    //   navigate('/Admin');

    // } else if (userName === userCredentials.userName && userPassword === userCredentials.userPassword) {
    //   // Redirect to user component
    //   setMessage("Login Successful")
    //   setIsLoggedOut(true)
    //   navigate('/Home');

    // } else {
    //   setMessage("Invalid username or password")
    //   // alert('Invalid username or password');
    // }
  }

  function validateForm() {
    let isValid = true;

    // Reset previous error messages
    setUsernameError("");
    setPasswordError("");

    // Validate username
    if (!userName.trim()) {
      setUsernameError("Username is required");
      isValid = false;
    }

    // Validate password
    if (!userPassword.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  }

  return (
    <div className="Lomain">
      <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <Link to="/">
        <img className="LoLogo" src="/src/assets/logo.png" alt="logo" />
      </Link>

      <div className="Losession">
        <div className="Loleft"></div>

        <form
          action=""
          className="login"
          autoComplete="off"
          onSubmit={handleLogin}
        >
          <h4 className="h4Lo">
            We are <span>MUZIX</span>
          </h4>
          <p>Welcome back! Log in to your account</p>
          <p>
            Not before <Link to="/Register">Register with US</Link>
          </p>
          <div className="floating-label">
            <input
              className="Loinput"
              placeholder="Username"
              type="username"
              name="userName"
              id="username"
              autoComplete="off"
              value={userName}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label className="lolabel" htmlFor="userName">
              Username:
            </label>
            {usernameError && (
              <div className="error-message">{usernameError}</div>
            )}
          </div>
          <div className="floating-label">
            <input
              className="Loinput"
              placeholder="Password"
              type="password"
              name="userPassword"
              id="password"
              autoComplete="off"
              value={userPassword}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label className="lolabel" htmlFor="userPassword">
              Password:
            </label>
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
          </div>
          <button type="submit" className="Loginbb">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
