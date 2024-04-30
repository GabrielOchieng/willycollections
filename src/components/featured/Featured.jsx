import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../../context/ItemContext";

const Featured = () => {
  const { items } = useContext(ItemContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay (remove in production)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      className="d-flex container containerfea flex-column align-items-center pt-5"
      id="featured"
    >
      <div className="upperdiv text-center">
        <p>Shop by category</p>
        {items.length !== 0 && <h3>FEATURED ITEMS</h3>}
        <hr />
      </div>

      <div className="lowerdiv container row d-flex justify-content-between gap-3 flex-wrap pt-4">
        {isLoading ? (
          <>
            {/* Render skeleton items while data is loading */}
            {[...Array(4)].map((_, index) => (
              <div
                key={`skeleton-${index}`} // Use a unique key
                className="skeleton loading-skeleton col-12 col-sm-5 col-lg-2 col-md-3 p-3 d-flex flex-column align-items-center gap-3 bg-light"
              >
                <div className="ratio ratio-16x9 bg-light loading-image"></div>
                <div className="p-2">
                  <div className="skeleton loading-text h-25 bg-light rounded"></div>
                  <div className="skeleton loading-text h-25 bg-light rounded mt-2"></div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {/* Render actual items once data is fetched */}
            {items.length === 0 && (
              <div>Slow internet.... no items to display</div>
            )}
            {items.map((item) => (
              <div
                key={item.itemID} // Use itemID as key for actual items
                data-aos="fade-right"
                className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3 d-flex flex-column align-items-center gap-3 bg-secondary-subtle"
                style={{ position: "relative" }}
              >
                <div className="image">
                  <img
                    src={item.itemImg}
                    className="img-fluid lazyload" // Remove h-auto and object-fit
                    loading="lazy"
                    alt={item.itemName}
                    style={{
                      width: "100%",
                      objectfit: "cover",
                      height: "150px",
                    }} // Use object-fit instead of inline height
                  />
                </div>
                <div className="wprice text-center w-100 p-2">
                  <h6 className="fs-6 text-capitalize">{item.itemName}</h6>
                  {/* Add the button here, wrapping it in a Link component */}
                  <Link to={`/item/${item.itemID}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
