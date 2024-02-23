import { useEffect } from "react";
import household from "../../assets/household.jpeg";
import men from "../../assets/men.jpg";
import shoes from "../../assets/shoes.jpeg";

import women from "../../assets/women.jpeg";
import inner from "../../assets/inner.webp";
import sports from "../../assets/sports.webp";
import "./category.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className=" d-flex container flex-column align-items-center pt-5">
      <div className="upperdiv text-center">
        <p>Shop by category</p>
        <h3>Shop by category</h3>
        <hr />
      </div>
      <div className="lowerdiv container row d-flex justify-content-between gap-3 flex-wrap pt-4">
        <div
          data-aos="fade-top"
          className="section col-12 col-md-3 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle
"
        >
          <div className="image">
            <img src={women} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="words text-center w-100 p-2 bg-light-subtle
"
          >
            <h4 className="fs-6 fw-bolder">WOMEN'S WEAR</h4>
            <h5 className="fs-6 fw-normal">20 PRODUCTS</h5>
          </div>
        </div>
        <div
          data-aos="fade-top"
          className="section col-12 col-md-3 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle"
        >
          <div className="image">
            <img src={men} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="words text-center w-100 p-2 bg-light-subtle
"
          >
            <h4 className="fs-6 fw-bolder">MEN'S WEAR</h4>
            <h5 className="fs-6 fw-normal">12 PRODUCTS</h5>
          </div>
        </div>
        <div
          data-aos="fade-top"
          className="section col-12 col-md-3 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle"
        >
          <div className="image">
            <img src={shoes} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="words text-center w-100 p-2 bg-light-subtle
"
          >
            <h4 className="fs-6 fw-bolder">SHOES</h4>
            <h5 className="fs-6 fw-normal">15 PRODUCTS</h5>
          </div>
        </div>
        <div
          data-aos="fade-top"
          className="section col-12 col-md-3 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle"
        >
          <div className="image">
            <img src={household} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="words text-center w-100 p-2 bg-light-subtle
"
          >
            <h4 className="fs-6 fw-bolder">HOUSEHOLD ITEMS</h4>
            <h5 className="fs-6 fw-normal">7 PRODUCTS</h5>
          </div>
        </div>
        <div
          data-aos="fade-top"
          className="section col-12 col-md-3 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle"
        >
          <div className="image">
            <img src={inner} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="words text-center w-100 p-2 bg-light-subtle
"
          >
            <h4 className="fs-6 fw-bolder">INNER CLOTHES</h4>
            <h5 className="fs-6 fw-normal">35 PRODUCTS</h5>
          </div>
        </div>
        <div
          data-aos="fade-top"
          className="section col-12 col-md-3 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle"
        >
          <div className="image">
            <img src={sports} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="words text-center w-100 p-2 bg-light-subtle
"
          >
            <h4 className="fs-6 fw-bolder">SPORTS WEAR</h4>
            <h5 className="fs-6 fw-normal">16 PRODUCTS</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
