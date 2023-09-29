import React from "react";
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/admin/login">Login Admin</Link>
    </div>
  );
}

export default Navbar;
