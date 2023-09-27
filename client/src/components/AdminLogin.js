import React, { useState } from "react";
import axios from 'axios'

function AdminLogin() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleInput = (e, inputState) => {
    e.preventDefault();
    inputState(e.target.value);
  };

return (
    <form>
      <input
        type="email"
        onChange={(e) => handleInput(e, setEmailInput)}
        placeholder="email"
      ></input>
      <input
        onChange={(e) => handleInput(e, setPasswordInput)}
        placeholder="password"
      ></input>
    </form>
  );
}

export default AdminLogin;
