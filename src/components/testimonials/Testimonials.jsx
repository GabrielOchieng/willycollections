import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center pt-5">
      <div className="uppertest">
        <h1>TESTIMONIALS</h1>
        <hr className="container" />
      </div>
      <div className="lowerdiv container ms-0 row d-flex gap-3 justify-content-between flex-wrap pt-4">
        <div
          data-aos="fade-top"
          className="sectiont col-12 col-sm-5 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle
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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsa fugiat voluptatem praesentium laborum magni inventore.
              Consectetur, tenetur deleniti. Animi!"
            </h6>
          </div>
          <div className="name">
            <p>Amad Diallo</p>
          </div>
        </div>
        <div
          data-aos="fade-top"
          className="sectiont col-12 col-sm-5 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle
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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsa fugiat voluptatem praesentium laborum magni inventore.
              Consectetur, tenetur deleniti. Animi!"
            </h6>
          </div>
          <div className="name">
            <p>Martial Antony</p>
          </div>
        </div>
        <div
          data-aos="fade-top"
          className="sectiont col-12 col-sm-5 col-lg-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle
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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsa fugiat voluptatem praesentium laborum magni inventore.
              Consectetur, tenetur deleniti. Animi!"
            </h6>
          </div>
          <div className="name">
            <p>Ochieng Oginga</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
