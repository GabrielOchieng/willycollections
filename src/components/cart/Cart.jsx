import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // Import shopping cart icon
import Cart_Services from "../../services/Cart_Services";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { shoppingCart, totalPrice, totalQuantity, fetchCartItems } =
    useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const currentUserId = currentUser.uid;
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const isEmpty = shoppingCart.length === 0;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        fetchCartItems(currentUserId); // Call context fetch if needed
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const handleCheckout = () => {
    // Implement your checkout logic here
    // This function could redirect to a checkout page, trigger an API call, etc.
    console.log(totalPrice);
    navigate("/checkout");
  };

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
    <div className="container border mt-5 mb-5 rounded shadow">
      {" "}
      {/* Added shadow for depth */}
      <div className="cart d-flex flex-column pt-5 pb-5 align-items-center">
        <h2 className="mb-3 text-center">
          <FaShoppingCart className="text-danger fs-1 me-2" /> Your Cart
        </h2>
        {isLoading ? (
          <p className="text-muted text-center">Loading cart items...</p>
        ) : isEmpty ? (
          <p className="text-muted text-center">
            Your cart is currently empty.
          </p>
        ) : (
          <ul className="list-group mb-3">
            {shoppingCart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center position-relative"
              >
                <div className="d-flex flex-column flex-grow-1  pe-3">
                  {/* Assuming you have image URL property in the item */}
                  <div className="d-flex flex-column ">
                    <div>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        width="100"
                        height="100"
                        className="me-3 rounded-start" // Added rounded corners for image
                      />
                    </div>
                  </div>

                  <div className="d-flex">
                    <div>
                      <p className="mb-1">Name: {item.name}</p>
                      <p className="mb-1">Type: {item.type}</p>
                      <p className="text-muted">
                        Details: {item.customerDetails}
                      </p>
                      <p className="text-muted">Ksh. {item.price} each</p>
                      <p className="text-muted">
                        Quantity: {item.quantity} piece(s)
                      </p>
                    </div>
                  </div>

                  {/* Delete button with positioning styles */}
                  <button
                    className="btn btn-sm btn-danger position-absolute top-0 end-0 mt-2 me-2"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {!isEmpty && (
          <>
            <div className="d-flex justify-content-between w-100 mt-3">
              <p className="text-muted">Total Items:</p>
              <p className="text-muted">{totalQuantity}</p>
            </div>
            <div className="d-flex justify-content-between w-100">
              <p className="text-muted">Total Price:</p>
              <p className="fw-bold">Ksh. {totalPrice}</p>
            </div>
          </>
        )}
        {/* Checkout button */}
        {!isEmpty && (
          <button
            className="btn btn-primary mt-3 w-100"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
