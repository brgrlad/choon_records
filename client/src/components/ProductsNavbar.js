import React from "react";
import {  Link } from "react-router-dom";

function ProductsNavbar() {
  return (
    <nav className="productsNavbar">

        <Link to="/products">FRESH IN! |</Link>
        <Link to="/products/Techno">TECHNO |</Link>
        <Link to="/products/House">HOUSE |</Link>
        <Link to="/products/Minimal">MINIMAL</Link>
    </nav>
  );
}

export default ProductsNavbar;
