// import appstore from "../../assets/appstore.png";
// import googleplay from "../../assets/googleplay.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import "./footer.css";

const Contact = () => {
  return (
    <div className="bg-secondary-subtle column">
      <div
        className="container row d-flex flex-wrap p-3 mx-auto align-items-center justify-content-between gap-2
    "
      >
        <div
          className="contactitm  col-lg-2  col-12 col-md-12  text-secondary d-flex flex-1 flex-column gap-1

"
        >
          <div className="contacttitle">
            <h1
              className="text-black font-bolder fs-5

"
            >
              WILLYCOLLECTIONS
            </h1>
          </div>
          <div className="contactp">
            <p>
              We have items that suit your style and taste. Suitable for both
              the young and the aged
            </p>
          </div>
          <div className="contacticons d-flex gap-3 cursor-pointer">
            <FaXTwitter />
            <FaLinkedin />
            <FaFacebook />
            <FaSquareInstagram />
          </div>
        </div>
        <div className="contactitm col-12  col-lg-2 col-sm-5 text-secondary  d-flex  flex-1 flex-column">
          <div className="contacthead">
            <h5
              className="text-black

"
            >
              COMPANY
            </h5>
          </div>
          <div className="contactul">
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="contactitm col-12  col-lg-2 col-sm-5 text-secondary d-flex flex-1 flex-column">
          <div className="contacthead">
            <h5
              className="text-black

"
            >
              HELP
            </h5>
          </div>
          <div className="contactul">
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="contactitm col-12  col-lg-2 col-sm-5 text-secondary d-flex flex-1 flex-column">
          <div className="contacthead">
            <h5
              className="text-black

"
            >
              FAQ
            </h5>
          </div>
          <div className="contactul">
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>
        <div className="contactitm col-12  col-lg-2 col-sm-5 text-secondary d-flex flex-1 flex-column">
          <div className="contacthead">
            <h5
              className="text-black

"
            >
              RESOURCES
            </h5>
          </div>
          <div className="contactul">
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="container" />
      <div className="lowest container pb-2 d-flex align-items-center flex-wrap justify-content-between">
        <div className="leftlowest">
          <p>THEGABRIELSHOW &copy; 2024. All rights reserved</p>
        </div>
        <div className="rightlowest d-flex flex-wrap gap-2">
          {/* <img src={googleplay} alt="googleplay" /> */}
          {/* <img src={appstore} alt="appstore" /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
