import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import { doc, getDoc } from "firebase/firestore"; // Import for Firestore access
import { db } from "../firebase"; // Import Firebase Firestore instance

const ItemPage = () => {
  const { id } = useParams(); // Get the itemID from URL parameters
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemRef = doc(db, "items", id); // Reference the specific document
        const itemSnap = await getDoc(itemRef);
        if (itemSnap.exists) {
          setItem(itemSnap.data());
        } else {
          console.warn("Product not found:", id);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    console.log(item.imageUrl);
    fetchItem();
  }, [id]); // Dependency array ensures fetch happens only on ID change

  if (!item) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="container pt-5 mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>{item.name}</h1>
          <p>{item.type}</p>
          <img src={item.imageUrl} alt={item.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>Price: ${item.price}</p>
          {/* ... other product information */}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

// import React from "react";

// import { useNavigate, useParams } from "react-router-dom";

// const ItemPage = () => {
//   const navigate = useNavigate();

//   // Fetch product details based on the ID from the URL
//   const { id } = useParams();
//   //   const product = fetchProductDetails(id); // Replace with your data fetching logic

//   // Handle cases where the product is not found
//   if (!item) {
//     navigate("/"); // Optionally redirect to a suitable page
//     return <div>Item not found</div>;
//   }

//   return (
//     <div>
//       {/* Render product details here */}
//       <h1>{item.itemName}</h1>
//       {/* <p>{product.description}</p> */}
//       {/* ... other product information */}
//     </div>
//   );
// };

// export default ItemPage;
