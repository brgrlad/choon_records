import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'

function ProductDetail({buyButtonHandler}) {

  const _id = useLocation().pathname.split('/')[2]
  const [productObj, setProductObj] = useState([]);



  const fetchProduct = async () => {
    try {

      let product = await axios.get(`http://localhost:4004/products/getOneProduct/${_id}`);
      setProductObj(product.data.data)




    } catch (error) {
      console.log(error)


    }

  };

  useEffect(() => {
    fetchProduct()
  }, []);


  //style this page

  return (


      <div className="singleProductWrapper">

       <div className="productLeftSide">
       <img src={productObj.picture}></img>




       </div>

       <div className="productRightSide">


       <h1> {productObj.artist}</h1>
      <h2> {productObj.title}</h2>
      <p>Introducing a captivating new limited imprint, dedicated to unveiling concealed realms and delving into.</p>

      <p>A1: Track Title</p>
      <p>A1: Track Title</p>
      <p>A1: Track Title</p>
      <p>A1: Track Title</p>

      <button onClick={() => buyButtonHandler()}>BUY ME!</button>


      </div>



      </div>
  );
}

export default ProductDetail;
