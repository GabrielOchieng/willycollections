import React from "react";
import { FaStar } from "react-icons/fa";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="lowerdiv container d-flex gap-3 flex-wrap pt-5">
      <div
        className="sectiont p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle
"
      >
        <div className="staricons">
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
        </div>
        <div
          className=" text-center 
"
        >
          <h6 className="fs-6 fw-medium">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa
            fugiat voluptatem praesentium laborum magni inventore. Consectetur,
            tenetur deleniti. Animi!"
          </h6>
        </div>
        <div className="name">
          <p>Amad Diallo</p>
        </div>
      </div>
      <div
        className="sectiont p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle
"
      >
        <div className="staricons">
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
        </div>
        <div
          className=" text-center 
"
        >
          <h6 className="fs-6 fw-medium">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa
            fugiat voluptatem praesentium laborum magni inventore. Consectetur,
            tenetur deleniti. Animi!"
          </h6>
        </div>
        <div className="name">
          <p>Martial Antony</p>
        </div>
      </div>
      <div
        className="sectiont p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle
"
      >
        <div className="staricons">
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
        </div>
        <div
          className=" text-center 
"
        >
          <h6 className="fs-6 fw-medium">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa
            fugiat voluptatem praesentium laborum magni inventore. Consectetur,
            tenetur deleniti. Animi!"
          </h6>
        </div>
        <div className="name">
          <p>Ochieng Oginga</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
