

function CheckoutProduct({ element, cart, setCart }) {
  const removeItem = (ID) => {
    let index = cart.findIndex((item) => item._id === ID);
    let cartCopy = [...cart];
    cartCopy.splice(index, 1);
    setCart(cartCopy);
    localStorage.setItem("cartLocalStorage", JSON.stringify(cartCopy));
  };

  return (
    <div className="cartWrapper">
      <p className="removeButton" onClick={() => removeItem(element._id)}>
        X
      </p>

      <img src={element.picture}></img>

      <div className="checkoutProductRight">
        <p>{element.artist}</p>
        <p>{element.title}</p>
        <p>{element.label}</p>
        <p>{element.price}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
