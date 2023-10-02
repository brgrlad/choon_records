import React, { useState, useEffect } from "react";
import axios from "axios";
import * as jose from "jose";


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
          console.log(token)

          const response = await axios.post(`http://localhost:4004/admin/loginAdmin`);

          return response.data.ok ? login(token) : logout();
        }
      } catch (error) {
        console.log(error);
      }
    };
    verify_token();
  }, [token]);

  //UPDATE STATE FOR EMAIL AND PASSWORD
  const handleInput = (e, inputState) => {
    e.preventDefault();
    inputState(e.target.value);
  };




  //LOGIN AFTER VERYFYING USER IN DB WITH loginAdmin()
  const login = async () => {

    let decodedToken = jose.decodeJwt(token);

    let admin = {
      emailAddress: decodedToken.emailAddress,
    };
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("admin", JSON.stringify(admin));
    setIsLoggedIn(true);


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

      <form onSubmit={login} className="loginAdmin">
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
      </form>
    </>
  );
}

export default AdminLogin;
