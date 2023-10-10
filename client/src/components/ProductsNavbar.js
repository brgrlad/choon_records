import React from "react";
import {  Link } from "react-router-dom";

function ProductsNavbar() {
  return (
    <nav className="productsNavbar">

        <Link to="/products">Fresh in! </Link>
        {/* <Link to="/products/Techno">techno /</Link>
        <Link to="/products/House">house  /</Link>
        <Link to="/products/Minimal">minimal </Link> */}
    </nav>
  );
}

export default ProductsNavbar;
