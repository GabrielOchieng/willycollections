import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Initial quantity

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

  if (isLoading) {
    return <div className="pt-5 mt-5">Loading product details...</div>;
  }

  if (!item) {
    return <div className="pt-5 mt-5">Product not found</div>;
  }

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change); // Ensure quantity stays positive
    setQuantity(newQuantity);
  };

  const totalPrice = item?.price ? item.price * quantity : 0; // Calculate total price

  return (
    <div className="container border rounded mb-5 pt-5 mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>{item.name}</h1>
          <p>{item.type}</p>
          <img src={item.imageUrl} alt={item.name} className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <p>Price: ${totalPrice.toFixed(2)}</p>{" "}
          {/* Display formatted total price */}
          <div className="d-flex align-items-center mb-3">
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
          {/* Add button for adding to cart or checkout (logic not included) */}
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
