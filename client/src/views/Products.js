import React, { useState, useEffect } from "react";
import axios from "axios";


function Products() {

    const [productsArr, setProductsArr] = useState([])

    //API CALL TO GET PRODUCTS
   const getProducts = async () => {
        const URL = 'http://localhost:4004/product/getAllProducts';
          try {
            const response = await axios.get(URL);

            let data = response.data
            setProductsArr(data)

          } catch (error) {
            console.error('Error:', error.message);
        }
    }


    useEffect(()=>{
        getProducts()

        //sometimes it works, sometimes it returns undefined
        console.log(productsArr.data)

    },[])


    // let {artist, label, price} = productsArr.data[0]


    return (
        <>



        <h1>Tite</h1>

        {/* PRODUCT CARD */}






        </>



    )
}
export default Products;
