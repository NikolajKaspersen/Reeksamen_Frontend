import React, { useState } from "react";
import "./registration.css";

const Registration = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const user = {};
  (user.username = username), (user.password = password);
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
      // localStorage.setItem("username", value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {

      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    // localStorage.setItem("username", username);
    // fetch til
    //const url = "https://chriswihudat.dk/tomcat/dat3_semesterProjek/api/user";
    const url = "http://localhost:8080/api/user"
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch(url, options).then((res) => {
      console.log(res);
      return res.json();
    });
    //hertil
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="username">
            Username{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={username}
            onChange={(e) => handleInputChange(e)}
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div className="footer">
        <button onClick={() => handleSubmit()} type="submit" className="btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default Registration;
