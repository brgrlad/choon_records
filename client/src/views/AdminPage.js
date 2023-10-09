import React, { useState } from "react";
import axios from "axios";

function AdminPage() {
  const [product, setProduct] = useState({
    artist: "",
    title: "",
    releaseDate: "",
    label: "",
    price: "",
    genres: "",
    picture: "",
    instock: true,
  });

  //UPDATE NEW PRODUCT OBJECT ON USER INPUT
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  //API CALL TO ADD A NEW PRODUCT
  const addProduct = async () => {
    const URL = "http://localhost:4004/products/createProduct";
    try {
      const response = await axios.post(URL, product);
      let data = response.data;
      return data
    } catch (error) {
      console.error("Error:", error.message);
    }
  };



  //SUBMIT FORM HANDLER
  const handleSubmit = async (e) => {

    e.preventDefault();

    let product = await addProduct();

    if (product.ok === true) {
      setProduct({});
      e.target.reset();
    } else {
      console.log("provide correct info");
    }

  };

  return (

    <div className="adminPageWrapper">
        <form id="addProduct" onSubmit={handleSubmit}>

        {/* ARTIST INPUT */}
        <input
          id="artist"
          onChange={handleChange}
          placeholder="Artist Name"
          value={product.artist}
        />

        {/* TITLE INPUT */}
        <input
          id="title"
          onChange={handleChange}
          placeholder="Album Title"
          value={product.title}
        />

        {/* RELEASE DATE INPUT */}
        <input
          id="releaseDate"
          type="date"
          onChange={handleChange}
          placeholder="Release Year"
          value={product.releaseDate}
        />

        {/* LABEL INPUT */}
        <input
          id="label"
          onChange={handleChange}
          placeholder="Label"
          value={product.label}
        />

        {/* PRICE INPUT */}
        <input
          id="price"
          type="number"
          onChange={handleChange}
          placeholder="Price"
          value={product.price}
        />

        {/* GENRES INPUT */}
        <input
          id="genres"
          type="string"
          onChange={handleChange}
          placeholder="genres"
          value={product.genres}
        />

        <input
          id="picture"
          type="string"
          onChange={handleChange}
          placeholder="picture"
          value={product.picture}
        />

        {/* INSTOCK INPUT */}
        <label className="instock">Instock?</label>
        <input
          type="checkbox"
          checked
          onChange={handleChange}
          value={product.instock}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default AdminPage;
