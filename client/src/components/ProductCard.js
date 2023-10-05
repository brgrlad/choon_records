import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ProductCard({element}) {

  const [elementID, setElementID] = useState(element._id);

  const clickHandler = (e) => {
    e.preventDefault()
    console.log('ckicked')


    //API CALL?
  }



  const navigate = useNavigate()

  return (


    <div className="productCard"
      onClick={(e) => {
          clickHandler(e);
          // redirect to product page?


        }} >

        <img src={element.picture}></img>

        <h3> {element.artist}</h3>
        <h3>{element.title}</h3>
        <h3>{element.lable}</h3>

        <p>{element.genres}</p>

        <p>{element.price}</p>
        <button >Buy</button>

    </div>



    // <div className="productCard">

    //     <img src="https://s3.amazonaws.com/media.kompakt.fm/01/assets/releases/fitted/perlon134-motorikherz-2lp.jpg?v=1"></img>

    //     <h3> Thomas Melchior</h3>
    //     <h3>Different Places</h3>
    //     <h3>Perlon Records</h3>

    //     <p>#Techno #Minimal</p>

    //     <p>5.50</p>
    //     <button>Buy</button>

    // </div>
  );
}

export default ProductCard;