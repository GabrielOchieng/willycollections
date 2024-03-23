// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ProductContext } from "../../context/ProductContext";
// import CartItem from "../CartItem/CartItem";

// const WomensWear = () => {
//   const { type } = useParams();
//   const { items } = useContext(ProductContext);
//   console.log(items);

//   const [filteredItems, setFilteredItems] = useState([]); // State for filtered data

//   useEffect(() => {
//     // Ensure items are available before filtering
//     if (items.length > 0) {
//       const filtered = items.filter(
//         (item) => item.itemType.toLowerCase() === type.toLowerCase()
//       );
//       setFilteredItems(filtered);
//       console.log(filtered);
//       console.log(filteredItems);
//     } else {
//       // Handle empty or missing items (e.g., show a loading indicator)
//       console.log("Items are not yet available");
//     }
//   }, [items, type]);

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const WomensWear = () => {
  const { type } = useParams();
  const { items } = useContext(ProductContext);

  const [filteredItems, setFilteredItems] = useState(items); // Initialize with items

  useEffect(() => {
    // Ensure items are available before filtering
    if (items.length > 0) {
      const filtered = items.filter(
        (item) => item.itemType.toLowerCase() === type.toLowerCase()
      );
      console.log(filtered);

      // Update state directly for consistency
      setFilteredItems(filtered);
    } else {
      // Handle empty or missing items (e.g., show a loading indicator)
    }
  }, [items, type]);

  console.log(filteredItems.length);

  return (
    <div className="container mt-5">
      <h1>{type.toUpperCase()}</h1>
      <div className="row d-flex justify-content-between flex-wrap">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="col-md-4 col-sm-6">
              {" "}
              {/* Adjust for item layout */}
              <div className="card mb-4 shadow-sm">
                <img
                  className="card-img-top"
                  src={item.itemImg}
                  alt={item.itemName}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.itemName}</h5>
                  <p className="card-text text-muted">{item.itemType}</p>
                  <p className="card-text">Ksh. {item.itemPrice}</p>{" "}
                  {/* Add buttons or links for actions (e.g., View Details, Add to Cart) */}
                  <Link to={`/item/${item.itemID}`}>
                    <button className="btn btn-primary w-100">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No items found for this category.</div>
        )}
      </div>
    </div>
  );
};

export default WomensWear;
