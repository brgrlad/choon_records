import React, { useState } from "react";
import axios from "axios";


function AdminLogin() {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");


    //UPDATE STATE FOR EMAIL AND PASSWORD
    const handleInput = (e, inputState) => {
      e.preventDefault()

      inputState(e.target.value);
    };


    //API CALL
    const login = async () => {

    let admin = {emailAddress: emailInput, password: passwordInput}
    console.log(admin)

    const URL = 'http://localhost:4004/admin/getOneAdmin';

      try {
        const response = await axios.get(URL, admin);

        console.log('Response data:', response.data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    }


  return (
    <form onSubmit={login}>
      <input type="email" onChange={(e) => handleInput(e, setEmailInput)} placeholder="email"></input>

      <input onChange={(e) => handleInput(e, setPasswordInput)} placeholder="password"></input>

      <button type="submit">submit</button>
    </form>
  )
}

export default AdminLogin;
