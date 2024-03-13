import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Testimonials from "../components/testimonials/Testimonials";
import { CartContext } from "../context/CartContext";

const ItemPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // **All states declared at the top level**
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [customerDetails, setCustomerDetails] = useState("");

  // ... rest of your component code

  // **useEffect moved to the end for consistent hook order**
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
  }, [id]);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change); // Ensure quantity stays positive
    setQuantity(newQuantity);
  };

  const totalPrice = item?.price ? item.price * quantity : 0; // Calculate total price

  const handleDetailsChange = (event) => {
    setCustomerDetails(event.target.value);
  };

  //ADDING ITEMS TO CART FUNCTIONALITY

  const { dispatch } = useContext(CartContext);

  const handleCartAdd = (id) => {
    dispatch({ type: "ADD_TO_CART", id: item.itemID, item });
    navigate("/cart");
  };

  // if (isLoading) {
  //   return <div className="pt-5 mt-5">Loading product details...</div>;
  // }

  // if (!item) {
  //   return <div className="pt-5 mt-5">Product not found</div>;
  // }

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

export default ItemPage;
