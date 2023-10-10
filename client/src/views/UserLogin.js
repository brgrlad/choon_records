import React, { useState, useEffect } from "react";
import axios from "axios";
import * as jose from "jose";
import { useNavigate } from "react-router-dom";
import {URL} from '../config'

function UserLogin({login}) {

  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //UPDATE STATE FOR EMAIL AND PASSWORD INPUTS
  const handleInput = (e, inputState) => {
    e.preventDefault();
    inputState(e.target.value);
  };

  //SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    let userInput = { emailAddress: emailInput, password: passwordInput};


    const path = `${URL}/user/login`;

    try {
      const response = await axios.post(path, userInput);

      if (response.data.token) {

        login(response.data.token, response.data.user);
        navigate("/");
      } else {
        console.log("wrong credentials");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }


  };

  return (
    <>
      <h1>User Login Page</h1>

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

export default UserLogin;
