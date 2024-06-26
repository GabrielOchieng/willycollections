import React, { useEffect } from "react";
import "./product.css";
import set from "../../assets/set.jpg";
import good from "../../assets/good.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-bottom" className="container">
      <div className="container-fluid d-flex flex-column flex-sm-row pt-4 gap-5 align-items-center h-75 header-shop">
        <div className="leftp container position-relative">
          <img
            src={set}
            className="img-fluid img-thumbnail "
            alt="shopping image"
          />
          <div
            className="trends position-absolute d-none d-md-block bottom-0 start-50  translate-middle start-md-50 text-white p-2 bg-black text-center
"
          >
            <p className="fs-6">Latest trends</p>
            <h3>Brand new, latest fashion designs and collections</h3>
            <h6>Ideal for the young, old and all in between</h6>
          </div>
        </div>
        <div className="rightp container flex-1 d-flex flex-column gap-2 align-items-center">
          <img src={good} alt="" className="img-fluid" />
          <h4 className="fs-6 fw-bolder">Ladies Dress</h4>
          <div className="priceop d-flex align-items-center gap-1">
            <Link to="/type/women">
              <button type="button" className="btn btn-dark fs-6">
                More Options
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
