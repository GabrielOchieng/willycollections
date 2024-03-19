// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { FaShoppingCart } from "react-icons/fa"; // Import shopping cart icon

// const Cart = () => {
//   const { shoppingCart, totalPrice, totalQty } = useContext(CartContext);

//   const isEmpty = shoppingCart.length === 0;

//   const handleCheckout = () => {
//     // Implement your checkout logic here
//     // This function could redirect to a checkout page, trigger an API call, etc.
//     console.log(totalPrice);
//   };

//   return (
//     <div className="container border mt-5 mb-5 rounded">
//       <div className="cart d-flex flex-column pt-5 pb-5 align-items-center">
//         <h2 className="mb-3">
//           <FaShoppingCart className="text-danger fs-1 me-2" /> Your Cart
//         </h2>
//         {isEmpty ? (
//           <p className="text-muted">Your cart is currently empty.</p>
//         ) : (
//           <ul className="list-group mb-3">
//             {/* Notice the closing curly brace here - it should be after the entire map function */}
//             {shoppingCart.map((item) => (
//               <li
//                 key={item.id}
//                 className="list-group-item d-flex justify-content-between"
//               >
//                 <div className="d-flex">
//                   {/* Assuming you have image URL property in the item */}
//                   <img
//                     src={item.imageUrl}
//                     alt={item.name}
//                     width="100"
//                     height="100"
//                     className="me-3"
//                   />
//                   <div>
//                     <p className="mb-1">{item.name}</p>
//                     <p className="text-muted">Ksh. {item.price}</p>
//                   </div>
//                 </div>
//                 <span className="text-muted">Qty: {item.qty}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//         {!isEmpty && (
//           <div className="d-flex justify-content-between w-100 mt-3">
//             <p className="text-muted">Total Items:</p>
//             <p className="text-muted">{totalQty}</p>
//           </div>
//         )}
//         {!isEmpty && (
//           <div className="d-flex justify-content-between w-100">
//             <p className="text-muted">Total Price:</p>
//             <p className="fw-bold">Ksh. {totalPrice}</p>
//           </div>
//         )}
//         {/* Checkout button */}
//         {!isEmpty && (
//           <button className="btn btn-primary mt-3" onClick={handleCheckout}>
//             Checkout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // Import shopping cart icon

const Cart = () => {
  const { shoppingCart, totalPrice, totalQty, fetchCartItems } =
    useContext(CartContext);

  const isEmpty = shoppingCart.length === 0;

  // Fetch cart items on component mount (assuming fetchCartItems is a function)
  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleCheckout = () => {
    // Implement your checkout logic here
    // This function could redirect to a checkout page, trigger an API call, etc.
    console.log(totalPrice);
  };

  return (
    <div className="container border mt-5 mb-5 rounded">
      <div className="cart d-flex flex-column pt-5 pb-5 align-items-center">
        <h2 className="mb-3">
          <FaShoppingCart className="text-danger fs-1 me-2" /> Your Cart
        </h2>
        {isEmpty ? (
          <p className="text-muted">Your cart is currently empty.</p>
        ) : (
          <ul className="list-group mb-3">
            {/* Notice the closing curly brace here - it should be after the entire map function */}
            {shoppingCart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between"
              >
                <div className="d-flex">
                  {/* Assuming you have image URL property in the item */}
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    width="100"
                    height="100"
                    className="me-3"
                  />
                  <div>
                    <p className="mb-1">{item.name}</p>
                    <p className="text-muted">Ksh. {item.price}</p>
                  </div>
                </div>
                <span className="text-muted">Qty: {item.qty}</span>
              </li>
            ))}
          </ul>
        )}
        {!isEmpty && (
          <div className="d-flex justify-content-between w-100 mt-3">
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
        {/* Checkout button */}
        {!isEmpty && (
          <button className="btn btn-primary mt-3" onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
