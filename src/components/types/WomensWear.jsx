// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { ProductContext } from "../../context/ProductContext";
// import CartItem from "../CartItem/CartItem";

// const WomensWear = () => {
//   const { type } = useParams();
//   const { items } = useContext(ProductContext);
//   console.log(type, items);

//   const filteredItems = items.filter(
//     (item) => item.itemType.toLowerCase() === type.toLowerCase()
//   );

//   console.log(filteredItems);
//   return (
//     <div className="container mt-5">
//       <h1>{type.toUpperCase()}</h1>
//       <div className="row d-flex justify-content-between flex-wrap">
//         {filteredItems.map((item) => (
//           // Assuming ItemPage component handles item data
//           <div>item.type</div>
//           //   <CartItem key={item.itemID} itemData={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WomensWear;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import CartItem from "../CartItem/CartItem";

const WomensWear = () => {
  const { type } = useParams();
  const { items } = useContext(ProductContext);

  const [filteredItems, setFilteredItems] = useState([]); // State for filtered data

  useEffect(() => {
    // Ensure items are available before filtering
    if (items.length > 0) {
      const filtered = items.filter(
        (item) => item.itemType.toLowerCase() === type.toLowerCase()
      );
      setFilteredItems(filtered);
    } else {
      // Handle empty or missing items (e.g., show a loading indicator)
      // console.log("Items are not yet available");
    }
  }, [items, type]);

  return (
    <div className="container mt-5">
      <h1>{type.toUpperCase()}</h1>
      <div className="row d-flex justify-content-between flex-wrap">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            // Assuming ItemPage component handles item data
            <CartItem key={item.itemID} itemData={item} />
          ))
        ) : (
          <div>No items found for this category.</div>
        )}
      </div>
    </div>
  );
};

export default WomensWear;
