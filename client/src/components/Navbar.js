import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  return (
    <>


    <nav className="navbar">

      <div className="homeLink">

      <Link to="/"> home</Link>
      </div>

      <div className="navRightSide">
      <Link to="/About">about</Link>
      <Link to="/Cart" className="green">cart</Link>


      {!isLoggedIn && <Link to="/User/Register">register</Link>}

      <Link to="/User/Login">login</Link>
      <Link to="/Contact">contact</Link>

      </div>
    </nav>

    </>
  );
}

export default Navbar;
