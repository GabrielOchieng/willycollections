import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { SiFsecure } from "react-icons/si";
import { FaCartArrowDown } from "react-icons/fa";

const Choose = () => {
  return (
    <div className=" d-flex flex-column align-items-center pt-5">
      <div className="upperdiv text-center">
        <p>Best Products</p>
        <h3>Why Choose Us</h3>
        <hr />
      </div>
      <div className="lowerdiv container row d-flex gap-3 flex-wrap pt-4 justify-content-between">
        <div
          className="section col-12 col-md-3 col-lg-2 p-3  d-flex flex-column text-center align-items-center gap-3
"
        >
          <FaTruckFast className="text-danger-emphasis fs-1" />
          <h3>Fast Delivery</h3>
          <p className="text-body-tertiary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            provident? Vitae rerum impedit harum eaque sit laboriosam autem vero
            velit!
          </p>
        </div>
        <div
          className="section col-12 col-md-3 col-lg-2 p-3  d-flex flex-column text-center align-items-center gap-3
"
        >
          <MdLocalShipping className="text-danger-emphasis fs-1" />
          <h3>Free Shipping</h3>
          <p className="text-body-tertiary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            provident? Vitae rerum impedit harum eaque sit laboriosam autem vero
            velit!
          </p>
        </div>
        <div
          className="section col-12 col-md-3 col-lg-2 p-3  d-flex flex-column text-center align-items-center gap-3
"
        >
          <SiFsecure className="text-danger-emphasis fs-1" />
          <h3>Secure Checkout</h3>
          <p className="text-body-tertiary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            provident? Vitae rerum impedit harum eaque sit laboriosam autem vero
            velit!
          </p>
        </div>
        <div
          className="section col-12 col-md-3 col-lg-2 p-3  d-flex flex-column text-center align-items-center gap-3
"
        >
          <FaCartArrowDown className="text-danger-emphasis fs-1" />
          <h3>Easy Returns</h3>
          <p className="text-body-tertiary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            provident? Vitae rerum impedit harum eaque sit laboriosam autem vero
            velit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
