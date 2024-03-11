import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    // Display a loading indicator while data is fetching
    return <div className="pt-5 mt-5">Loading product details...</div>;
  }

  if (!item) {
    // Handle the case where loading finished but no item was found
    return <div className="pt-5 mt-5">Product not found</div>;
  }

  // Render product details only when item is available
  return (
    <div className="container border rounded mb-5 pt-5 mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>{item.name}</h1>
          <p>{item.type}</p>
          <img src={item.imageUrl} alt={item.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>Price: ${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
