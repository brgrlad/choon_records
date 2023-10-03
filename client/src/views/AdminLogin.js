import React, { useState, useEffect } from "react";
import axios from "axios";
import * as jose from "jose";
import { Navigate } from "react-router-dom";

function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //VERIFY TOKEN
  useEffect(() => {
    const verify_token = async () => {
      try {
        if (!token) {
          setIsLoggedIn(false);
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.post(
            `http://localhost:4004/admin/loginAdmin`
          );
          console.log(response);
          return response.data.ok ? login(response.data.token) : logout();
        }
      } catch (error) {
        console.log(error);
      }
    };
    verify_token();
  }, [token]);

  const login = (token) => {
    let decodedToken = jose.decodeJwt(token);

    let admin = {
      emailAddresss: decodedToken.emailAddresss,
    };
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("admin", JSON.stringify(admin));
    setIsLoggedIn(true);
  };

  //UPDATE STATE FOR EMAIL AND PASSWORD
  const handleInput = (e, inputState) => {
    e.preventDefault();
    inputState(e.target.value);
  };

  //LOGIN AFTER VERYFYING USER IN DB WITH loginAdmin()
  const handleSubmit = async (e) => {
    e.preventDefault();

    //OK
    let adminInput = { emailAddress: emailInput, password: passwordInput };

    const URL = "http://localhost:4004/admin/loginAdmin";

    try {
      const response = await axios.post(URL, adminInput);

      console.log(response);

      if (response.data.token) {
        login(response.data.token);
      } else {
        console.log("wrong credentials");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  //LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setIsLoggedIn(false);
  };

  return (
    <>
      <h1>Admin Login Page</h1>

      <form onSubmit={handleSubmit} className="loginAdmin">
        <input
          type="email"
          onChange={(e) => handleInput(e, setEmailInput)}
          placeholder="email"
        ></input>

        <input
          onChange={(e) => handleInput(e, setPasswordInput)}
          placeholder="password"
        ></input>

        <button type="submit">submit</button>
        {console.log(isLoggedIn)}
      </form>

      {/* redirect to admin page */}
      <div>
        {isLoggedIn
        ?<Navigate to= "/admin/adminPage" replace={true} />
        :<h1>Please Login</h1>
        }
      </div>
    </>
  );
}

export default AdminLogin;


//  <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.

