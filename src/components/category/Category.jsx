import React from "react";
import household from "../../assets/household.jpeg";
import men from "../../assets/men.jpg";
import shoes from "../../assets/shoes.jpeg";

import women from "../../assets/women.jpeg";
import inner from "../../assets/inner.webp";
import sports from "../../assets/sports.webp";
import "./category.css";

const Category = () => {
  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <div className="upperdiv">
        <p>Shop by category</p>
        <h3>Shop by category</h3>
        <hr />
      </div>
      <div className="lowerdiv d-flex flex-wrap pt-4">
        <div
          className="section p-3 m-2 d-flex flex-column align-items-center gap-3 bg-secondary-subtle
"
        >
          <div className="image">
            <img src={women} className="img-fluid" alt="shopping item" />
          </div>
          <div className="words">
            <h4>WOMEN'S WEAR</h4>
            <h5>20 PRODUCTS</h5>
          </div>
        </div>
        <div className="section p-3 m-2 d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={men} className="img-fluid" alt="shopping item" />
          </div>
          <div className="words">
            <h4>MEN'S WEAR</h4>
            <h5>12 PRODUCTS</h5>
          </div>
        </div>
        <div className="section p-3 m-2 d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={shoes} className="img-fluid" alt="shopping item" />
          </div>
          <div className="words">
            <h4>SHOES</h4>
            <h5>15 PRODUCTS</h5>
          </div>
        </div>
        <div className="section p-3 m-2 d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={household} className="img-fluid" alt="shopping item" />
          </div>
          <div className="words">
            <h4>HOUSEHOLD ITEMS</h4>
            <h5>7 PRODUCTS</h5>
          </div>
        </div>
        <div className="section p-3 m-2 d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={inner} className="img-fluid" alt="shopping item" />
          </div>
          <div className="words">
            <h4>INNER CLOTHES</h4>
            <h5>35 PRODUCTS</h5>
          </div>
        </div>
        <div className="section p-3 m-2 d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={sports} className="img-fluid" alt="shopping item" />
          </div>
          <div className="words">
            <h4>SPORTS WEAR</h4>
            <h5>16 PRODUCTS</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
