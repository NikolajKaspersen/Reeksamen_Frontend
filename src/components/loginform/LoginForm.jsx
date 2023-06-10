import React, { useState } from "react"
import "./loginform.css";
function LogIn({ login, logout}) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
  
    const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
  
    return (
      <div className="login-container">
        <form onChange={onChange} >
          <input type="text" placeholder="User Name" id="username" />
          <input type="text" placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
        </form>
      </div>
    )
  }
export default LogIn;  