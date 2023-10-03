import React, { useState, useEffect } from "react";
import axios from "axios";
import * as jose from "jose";
import { useNavigate } from "react-router-dom";

function AdminLogin({login}) {
const navigate = useNavigate()

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");




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
        navigate('/admin/adminPage')
      } else {
        console.log("wrong credentials");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
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

      </form>


    </>
  );
}

export default AdminLogin;


//  <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.

