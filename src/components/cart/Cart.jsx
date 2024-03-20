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

// import React, { useContext, useEffect } from "react";
// import { CartContext } from "../../context/CartContext";
// import { FaShoppingCart } from "react-icons/fa"; // Import shopping cart icon

// const Cart = () => {
//   const { shoppingCart, totalPrice, totalQty, fetchCartItems } =
//     useContext(CartContext);

//   const isEmpty = shoppingCart.length === 0;

//   useEffect(() => {
//     fetchCartItems(); // Fetch cart items on mount
//   }, []);

//   useEffect(() => {
//     // Re-render the component whenever the shoppingCart state changes
//     console.log("Cart items updated:", shoppingCart); // Optional for debugging
//   }, [shoppingCart]);

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

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // Import shopping cart icon
import Cart_Services from "../../services/Cart_Services";
import { AuthContext } from "../../context/AuthContext";
// import { CartDataService } from "./CartServices"; // Import CartDataService

const Cart = () => {
  const { shoppingCart, totalPrice, totalQty, fetchCartItems } =
    useContext(CartContext);
  console.log(shoppingCart);
  const { currentUser } = useContext(AuthContext);

  const currentUserId = currentUser.uid;
  // const cartService = new CartDataService(); // Create an instance of CartDataService
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const isEmpty = shoppingCart.length === 0;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Check if Cart_Services exists and the fetchCartItems function is defined
        if (
          Cart_Services &&
          typeof Cart_Services.fetchCartItems === "function"
        ) {
          await Cart_Services.fetchCartItems(currentUserId); // Call context fetch if needed
        } else {
          console.error(
            "Cart_Services.fetchCartItems is not defined or not a function"
          );
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const handleDeleteItem = async (itemId) => {
    setIsLoading(true);
    try {
      await cartService.deleteCartItem(userId, itemId); // Call delete function from service
      fetchCartItems(); // Refetch cart items after deletion (consider context update)
    } catch (error) {
      console.error("Error deleting item:", error);
      // Handle errors appropriately (e.g., display error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container border mt-5 mb-5 rounded">
      <div className="cart d-flex flex-column pt-5 pb-5 align-items-center">
        <h2 className="mb-3">
          <FaShoppingCart className="text-danger fs-1 me-2" /> Your Cart
        </h2>
        {isLoading ? (
          <p className="text-muted">Loading cart items...</p>
        ) : isEmpty ? (
          <p className="text-muted">Your cart is currently empty.</p>
        ) : (
          <ul className="list-group mb-3">
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
                <span className="text-muted">
                  Qty: {item.qty}{" "}
                  {/* Add button to update quantity (optional) */}
                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </span>
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
