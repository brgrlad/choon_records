import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ProductDetail({ cart, setCart }) {

  //ADD ITEM TO CART IN LOCAL STORAGE
  const buyButtonHandler = (element) => {
    let newArr = [...cart, element];
    setCart(newArr);
    localStorage.setItem("cartLocalStorage", JSON.stringify(newArr));
  };



  const _id = useLocation().pathname.split("/")[2];
  const [productObj, setProductObj] = useState([]);

  const fetchProduct = async () => {
    try {
      let product = await axios.get(
        `http://localhost:4004/products/getOneProduct/${_id}`
      );
      setProductObj(product.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="singleProductWrapper">
      <div className="productLeftSide">
        {/* record cover pic */}
        <img src={productObj.picture}></img>
      </div>

      <div className="productRightSide">
        <h1> {productObj.artist}</h1>
        <h2> {productObj.title}</h2>
        <p>
          Introducing a captivating new limited imprint, dedicated to unveiling
          concealed realms and delving into.
        </p>

        <p>A1: Track Title</p>
        <p>A1: Track Title</p>
        <p>A1: Track Title</p>
        <p>A1: Track Title</p>

        <div className="buyWrapper">

         <h1 className="buyNow">Buy Now!</h1>

        <button onClick={() => buyButtonHandler(productObj)} className="buyButton grayBg">€{productObj.price}</button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
