import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="container d-flex flex-column mb-3 align-items-center pt-5">
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
              "Overall, I had a great experience shopping with WILLYCOLLECTIONS.
              I'll definitely be back for more!"
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
              "Ordering from WILLYCOLLLECTIONS was a breeze. The website is easy
              to navigate and checkout was seamless."
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
              "If you're on the fence about buying from WILLYCOLLECTIONS, I
              highly recommend it. You won't be disappointed."
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
