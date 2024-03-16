import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { v4 as uuidv4 } from "uuid";

const Featured = () => {
  const { items } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay (remove in production)
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);

  return (
    <div className="d-flex container containerfea flex-column align-items-center pt-5">
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
                key={index}
                className="skeleton col-12 col-sm-5 col-lg-2 col-md-3 p-3 d-flex flex-column align-items-center gap-3 bg-light"
              >
                <div className="ratio ratio-16x9 bg-light"></div>
                <div className="p-2">
                  <div className="skeleton h-25 bg-light rounded"></div>
                  <div className="skeleton h-25 bg-light rounded mt-2"></div>
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
                key={uuidv4()}
                data-aos="fade-right"
                className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3 d-flex flex-column align-items-center gap-3 bg-secondary-subtle"
              >
                <div className="image">
                  <img
                    src={item.itemImg}
                    className="img-fluid lazyload"
                    loading="lazy"
                    alt={item.itemName}
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
