import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // Import shopping cart icon

const Cart = () => {
  const { shoppingCart, totalPrice, totalQty } = useContext(CartContext);

  console.log(shoppingCart[0].price);
  console.log(typeof shoppingCart[0].price);

  const isEmpty = shoppingCart.length === 0;

  return (
    <div className="cart d-flex flex-column pt-5 align-items-center">
      <h2 className="mb-3">
        <FaShoppingCart className="text-danger fs-1 me-2" /> Your Cart
      </h2>
      {isEmpty ? (
        <p className="text-muted">Your cart is currently empty.</p>
      ) : (
        <ul className="list-group mb-3">
          {shoppingCart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between"
            >
              <div>{item.name}</div>
              <span>
                ${item.price} x {item.qty} = Ksh. {item.price * item.qty}
              </span>
            </li>
          ))}
        </ul>
      )}
      {!isEmpty && (
        <div className="d-flex justify-content-between w-100 mb-3">
          <p className="text-muted">Total Items:</p>
          <p className="text-muted">{totalQty}</p>
        </div>
      )}
      {!isEmpty && (
        <div className="d-flex justify-content-between w-100">
          <p className="text-muted">Total Price:</p>
          <p className="fw-bold">Ksh. {totalPrice}</p>
        </div>
      )}
      {/* Add buttons for checkout or other functionalities here */}
    </div>
  );
};

export default Cart;
