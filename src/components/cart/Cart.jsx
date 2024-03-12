import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const data = useContext(CartContext);
  console.log(data);

  return <div>Cart</div>;
};

export default Cart;
