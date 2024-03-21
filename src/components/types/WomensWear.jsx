import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import ItemPage from "../../pages/ItemPage";

const WomensWear = () => {
  const { type } = useParams();
  const { items } = useContext(ProductContext);
  console.log(type, items);
  console.log(ItemPage);

  const filteredItems = items.filter(
    (item) => item.itemType.toLowerCase() === type.toLowerCase()
  );

  return (
    <div className="container mt-5">
      <h1>{type.toUpperCase()}</h1>
      <div className="row d-flex justify-content-between flex-wrap">
        {filteredItems.map((item) => (
          // Assuming ItemPage component handles item data
          <ItemPage />
        ))}
      </div>
    </div>
  );
};

export default WomensWear;
