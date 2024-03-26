import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemContext } from "../../context/ItemContext";

const WomensWear = () => {
  const { type } = useParams();
  const { items } = useContext(ItemContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate data fetching with a delay

    if (items.length > 0) {
      const filtered = items.filter(
        (item) => item.itemType.toLowerCase() === type.toLowerCase()
      );

      setFilteredItems(filtered); // Directly set filtered items
    }
    setIsLoading(false); // Indicate loading finished
  }, [items]);

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-5 text-decoration-underline">
        {type.toUpperCase()}
      </h1>
      <div className="row d-flex  gap-3 justify-content-between flex-wrap">
        {isLoading ? (
          <div className="col-12 text-center">Loading items...</div>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.itemID} // Add key using item.itemID
              className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3 d-flex flex-column align-items-start gap-3 bg-secondary-subtle"
            >
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
