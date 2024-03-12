import React, { useEffect } from "react";
import { FaTruckFast, FaCartArrowDown } from "react-icons/fa6";

import { MdLocalShipping } from "react-icons/md";

import { SiFsecure } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Choose = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="choose mb-5 d-flex flex-column align-items-center pt-5">
      <div className="upperdiv text-center">
        <p>Best Products</p>
        <h3>Why Choose Us</h3>
        <hr />
      </div>
      <div
        data-aos="fade-bottom"
        className="lowerdiv container row d-flex gap-5 flex-wrap pt-4 justify-content-between"
      >
        <div className="section col-12 col-md-4  p-3 d-flex flex-column text-center align-items-center gap-3 bg-light rounded shadow border">
          <FaTruckFast className="text-danger fs-1" />
          <h3>Fast Delivery</h3>
          <p className="text-body">
            We prioritize getting your purchases to you quickly. Enjoy speedy
            delivery options, including next-day delivery on select items.
            Choose your preferred option at checkout and see estimated delivery
            times before you pay!
          </p>
        </div>
        <div className="section col-12 col-md-4  p-3 d-flex flex-column text-center align-items-center gap-3 bg-light rounded shadow border">
          <MdLocalShipping className="text-danger fs-1" />
          <h3>Countrywide Shipping</h3>
          <p className="text-body">
            We offer fast and reliable countrywide delivery, so you can shop
            from the comfort of your home and get your purchases delivered
            directly to you, wherever you are in Kenya.
          </p>
        </div>
        <div className="section col-12 col-md-4  p-3 d-flex flex-column text-center align-items-center gap-3 bg-light rounded shadow border">
          <SiFsecure className="text-danger fs-1" />
          <h3>Secure Checkout</h3>
          <p className="text-body">
            We offer security measures to create a safe environment for
            customers to complete their purchases with peace of mind.
          </p>
        </div>
        <div className="section col-12 col-md-4  p-3 d-flex flex-column text-center align-items-center gap-3 bg-light rounded shadow border">
          <FaCartArrowDown className="text-danger fs-1" />
          <h3>Easy Confirmation</h3>
          <p className="text-body">
            Not sure about the size or color? No problem! You can easily confirm
            them before entering the details in our form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
