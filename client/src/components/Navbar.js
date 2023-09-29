import React from "react";
import {  Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/User/Register">Register</Link>
        <Link to="/User/Login">User Login</Link>
        <Link to="/admin/login">Login Admin</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
