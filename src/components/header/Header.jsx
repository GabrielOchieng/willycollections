import React from "react";
import shopping from "../../assets/shopping.jpg";
import "./header.css";

const Header = () => {
  return (
    <div className="container-fluid d-flex pt-4 gap-5 align-items-center h-75 header-shop">
      <div className="left conatiner d-flex flex-column gap-3">
        <p>Find all quality items you need at affordable prices</p>
        <h5>Delivery at your doorstep</h5>
        <button type="button" className="btn btn-dark fs-2">
          Shop Now
        </button>
      </div>
      <div className="right container">
        <img
          src={shopping}
          className="img-fluid img-thumbnail"
          alt="shopping image"
        />
      </div>
    </div>
  );
};

export default Header;
