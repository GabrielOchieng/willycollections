import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import Testimonials from "../testimonials/Testimonials";

const CartItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cart, dispatch, addToCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  // State variables declared upfront
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [customerDetails, setCustomerDetails] = useState("");

  // Memoize the total price calculation
  const totalPrice = React.useMemo(() => {
    return item?.price ? item.price * quantity : 0;
  }, [item, quantity]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setIsLoading(true);
        const itemRef = doc(db, "items", id);
        const itemSnap = await getDoc(itemRef);
        setItem(itemSnap.data());
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]); // Only re-run effect when `id` changes

  // ... rest of your component code (handleQuantityChange, handleDetailsChange)
  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change); // Ensure quantity stays positive
    setQuantity(newQuantity);
  };

  // const totalPrice = item?.price ? item.price * quantity : 0; // Calculate total price

  const handleDetailsChange = (event) => {
    setCustomerDetails(event.target.value);
  };

  const handleCartAdd = async () => {
    const itemToAdd = {
      ...item,
      quantity,
      customerDetails,
    };
    await addToCart(itemToAdd); // Call addToCart from context
    console.log("Item added to cart successfully!");
    navigate("/cart");
  };

  return (
    <div>
      {item && (
        <div className="container border rounded mb-5 p-3 mt-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1 className="text-capitalize">{item.name}</h1>
              <p className="text-capitalize">{item.type}</p>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-md-6 d-flex flex-column gap-5 justify-content-between">
              <div className="">
                <div>
                  <p>
                    {" "}
                    <span className="fw-bold">Price:</span> Ksh.{" "}
                    {totalPrice.toFixed(2)}
                  </p>{" "}
                  {/* Display formatted total price */}
                </div>
                <div className="d-flex gap-2 mb-3">
                  <div>
                    <p className="fw-bold"> Number of items: </p>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="customerDetails">Special Instructions:</label>
                  <textarea
                    id="customerDetails"
                    className="form-control"
                    placeholder="Add specific details, for example, the size you need delivered"
                    rows="3"
                    value={customerDetails}
                    onChange={handleDetailsChange}
                  />
                </div>
              </div>
              {/* Add button for adding to cart or checkout (logic not included) */}
              <button className="btn btn-primary" onClick={handleCartAdd}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      {isLoading ? (
        <div className="pt-5 mt-5">Loading product details...</div>
      ) : (
        <Testimonials />
      )}
    </div>
  );
};

export default CartItem;
