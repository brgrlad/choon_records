import React, { useState, useEffect } from "react";
import axios from "axios";

function RegisterUser() {

  //CREATE STATES
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("")

  //INPUT HANDLERS
  const handleInput = (e, inputState) => {
    e.preventDefault();
    inputState(e.target.value);
  };

  //SUBMIT HANDLER/API CALL
  const handleSubmit = async (e) => {
    e.preventDefault()

    let newUser =
    {
      name,
      surname,
      emailAddress,
      password,
      address,
      birthDate
    }


    const URL = "http://localhost:4004/user/register";

    try {
      const resonse = await axios.post(URL, newUser)
      console.log('user created!')
    } catch (error) {
      console.log(error)
    }

  }

    return (

      <div className="registerUserWrapper">


      <h1> Create an account!</h1>

      <form id="createUser">

      <input type="name" onChange ={(e) => handleInput(e, setName)} id="name" placeholder="First Name"/>
      <input type="text" onChange ={(e) => handleInput(e, setSurname)} id="surname" placeholder="Surname"/>
      <input type="email" onChange ={(e) => handleInput(e, setEmailAddress)} id="email" placeholder="E-mail Address"/>
      <input type="password" onChange ={(e) => handleInput(e, setPassword)} id="password" placeholder="Password"/>
      <input type="text" onChange ={(e) => handleInput(e, setAddress)} id="address" placeholder="Address"/>
      <input type="date" onChange ={(e) => handleInput(e, setBirthDate)} id="birthDate" placeholder="Birth Date"/>
      <button type="submit"> Register! </button>

      </form>

      </div>
    );
  }

  export default RegisterUser;
