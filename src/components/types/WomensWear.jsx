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
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-5 underline">{type.toUpperCase()}</h1>
      <div className="row d-flex  gap-3 justify-content-between flex-wrap">
        {isLoading ? (
          <div className="col-12 text-center">Loading items...</div>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3 d-flex flex-column align-items-start gap-3 bg-secondary-subtle">
              {" "}
              {/* New classes */}
              <div className="w-100">
                <img
                  className="img-fluid lazyload w-100"
                  loading="lazy"
                  src={item.itemImg}
                  alt={item.itemName}
                  style={{ width: "100%", height: "150px" }}
                />
                <div className="wprice text-center w-100 p-2">
                  <h5 className="fs-6 text-capitalize">{item.itemName}</h5>
                  <p className="fs-6"> {item.itemType}</p>
                  <p className="fs-6"> Ksh. {item.itemPrice}</p>
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
