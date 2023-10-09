import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ProductCard({element, setCart, cart}) {

  const navigate = useNavigate()

  const clickHandler = async() => {

    console.log()
    navigate(`/products/${element._id}`)

  }

  // BUY BUTTON / ADD TO CART
  const buyButtonHandler = () => {

    let newArr = [...cart, element]
    setCart(newArr)
    localStorage.setItem("cartLocalStorage", JSON.stringify(newArr))




  }






  return (

    <div className="productCard">


      <div className="clickWrapper" onClick={clickHandler}>

        <img src={element.picture}></img>
        <p>____</p>
        <h3> {element.artist}</h3>
        <p>{element.title}</p>
        <p>{element.label}, {element.releaseDate}</p>
      </div>

      <p>{element.genres}</p>

      <div className="buyWrapper">
        <button onClick={buyButtonHandler} id="buyButton">€{element.price}</button>

      </div>
    </div>

  );
}

export default ProductCard;