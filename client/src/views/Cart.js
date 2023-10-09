import React, { useState, useEffect } from "react";

function Cart({ cart,  setCart, CheckoutProduct, cartTotal, setCartTotal }) {


  useEffect(() => {
    const updateTotal = () => {
      const newTotal = cart.reduce((acc, element) => acc + element.price, 0);
      setCartTotal(newTotal);
    }

    updateTotal();

  }, [cart]);

  return (
    <>


      {cart.length > 0  &&
        cart.map((element) => (
          <CheckoutProduct element={element} cart={cart} setCart={setCart} />
        ))}

      <div className="total">




        <p>Grand Total: {cartTotal}</p>
        <button className="checkout">Checkout!</button>

      </div>


    </>
  );
}

export default Cart;
