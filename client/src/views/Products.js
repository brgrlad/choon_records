import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {URL} from '../config'

function Products({setCart, cart}) {


  const [productsArr, setProductsArr] = useState([]);

  //API CALL TO GET PRODUCTS
  const getProducts = async () => {
    const path = `${URL}/products/getAllProducts`;
    try {
      const response = await axios.get(path);

      let products = response.data;

      setProductsArr(products.data);

    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="productsWrapper">


      {productsArr && productsArr.length >0 &&productsArr.map((element) => (
        <ProductCard element={element} setCart={setCart} cart={cart}  />
      ))}
    </div>
  );
}
export default Products;
