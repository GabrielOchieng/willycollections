// import appstore from "../../assets/appstore.png";
// import googleplay from "../../assets/googleplay.jpg";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

import "./footer.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact" className="bg-secondary-subtle column">
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
            <Link
              className="linki "
              to={"https://chat.whatsapp.com/B50fzuvFHtA4R0aXWM8Xxs"}
              target="_blank"
            >
              <FaWhatsappSquare />
            </Link>
            <Link
              className="linki "
              to={"https://chat.whatsapp.com/B50fzuvFHtA4R0aXWM8Xxs"}
              target="_blank"
            >
              <FaXTwitter />
            </Link>
            <Link
              className="linki "
              to={"https://chat.whatsapp.com/B50fzuvFHtA4R0aXWM8Xxs"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="linki "
              to={"https://chat.whatsapp.com/B50fzuvFHtA4R0aXWM8Xxs"}
              target="_blank"
            >
              <FaFacebook />
            </Link>
            <Link
              className="linki "
              to={"https://chat.whatsapp.com/B50fzuvFHtA4R0aXWM8Xxs"}
              target="_blank"
            >
              <FaSquareInstagram />
            </Link>
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
              Contacts
            </h5>
          </div>
          <div className="contactul">
            <ul>
              <li>
                <Link
                  className="linki "
                  to={"https://chat.whatsapp.com/B50fzuvFHtA4R0aXWM8Xxs"}
                  target="_blank"
                >
                  <FaWhatsappSquare />
                </Link>
              </li>
              <li>
                <Link
                  className="linki "
                  to={"https://wa.me/254705956148"}
                  target="_blank"
                >
                  <MdWhatsapp />
                </Link>
              </li>
              <li>
                <Link
                  className="linki "
                  to={"tel:+254-0-595-6148"}
                  target="_blank"
                >
                  <BsTelephoneFill />
                </Link>
              </li>
              <li>
                <Link
                  className="linki "
                  to={"https://chat.whatsapp.com/B50fzuvFHtA4R0aXWM8Xxs"}
                  target="_blank"
                >
                  +254705956148
                </Link>
              </li>
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
