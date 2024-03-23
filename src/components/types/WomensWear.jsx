import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const WomensWear = () => {
  const { type } = useParams();
  const { items } = useContext(ProductContext);

  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate data fetching with a delay
    setTimeout(() => {
      if (items.length > 0) {
        const filtered = items.filter(
          (item) => item.itemType.toLowerCase() === type.toLowerCase()
        );

        // Remove duplicates
        const seenItems = {};
        const uniqueItems = filtered.filter((item) => {
          const isDuplicate = seenItems.hasOwnProperty(item.itemID);
          seenItems[item.itemID] = true;
          return !isDuplicate;
        });

        setFilteredItems(uniqueItems);
      }
      setIsLoading(false); // Indicate loading finished
    }, 3000); // Adjust delay as needed
  }, [items, type]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 underline">{type.toUpperCase()}</h1>
      <div className="row d-flex justify-content-between flex-wrap">
        {isLoading ? (
          <div className="col-12 text-center">Loading items...</div>
        ) : filteredItems.length > 0 ? (
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
                  <h5 className="card-title">Name: {item.itemName}</h5>
                  <p className="card-text text-muted">Type: {item.itemType}</p>
                  <p className="card-text">Price: Ksh. {item.itemPrice}</p>{" "}
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
