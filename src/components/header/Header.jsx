import React from "react";

const Header = () => {
  return (
    <div class="container-fluid d-flex">
      <div className="left conatiner d-flex flex-column gap-3">
        <p>Find all quality items you need at affordable prices</p>
        <h5>Delivery at your doorstep</h5>
        <button type="button" class="btn btn-dark fs-2">
          Shop Now
        </button>
      </div>
      <div className="right container"></div>
    </div>
  );
};

export default Header;
