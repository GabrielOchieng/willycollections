import { useEffect } from "react";
import shopping from "../../assets/shopping.jpg";
import "./header.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="container-fluid header-shop d-flex flex-column flex-lg-row flex-md-row pt-5 gap-5 align-items-center h-75">
      <div className="left container d-flex flex-column gap-3">
        <p>
          <span className="text-primary font-bold">
            <Link
              className="link"
              to={"https://chat.whatsapp.com/B50fzuvFHtA4R0aXWM8Xxs"}
              target="_blank"
            >
              {" "}
              WILLYCOLLECTIONS{" "}
            </Link>
          </span>
          is a retail and wholesale platform that aims at providing you with
          quality affordable items you are in need of. We deal in clothing,
          shoes, bags, art products and other items.
        </p>
        <p>Find all quality items you need at affordable prices</p>
        <h5>Delivery done countrywide at a small fee.</h5>
        <button type="button" className="btn btn-dark fs-2">
          Shop Now
        </button>
      </div>
      <div className="right container">
        <img
          data-aos="fade-left" //Here you can use any of the AOS animations
          src={shopping}
          className="img-fluid mt-2 img-thumbnail"
          alt="shopping image"
        />
      </div>
    </div>
  );
};

export default Header;
