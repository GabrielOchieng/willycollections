import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar d-flex bg-primary bg-gradient align-items-center px-3

    "
    >
      <div className="navtitle">
        <h1 className="fs-3">WILLY COLLECTIONS</h1>
      </div>
      <div className="navul d-flex">
        <ul className="d-flex list-unstyled py-1">
          <li>
            <Link to="/">SHOP ALL</Link>
          </li>
          <li>
            <Link to="/">WOMEN'S WEAR</Link>
          </li>
          <li>
            <Link to="/">MEN'S WEAR</Link>
          </li>

          <li>
            <Link to="/">HOUSEHOLDS</Link>
          </li>
        </ul>
      </div>

      <div className="navul ">
        <ul className="d-flex list-unstyled fs-6">
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/">CONTACT</Link>
          </li>
          <li>
            <Link to="/">TRACK ORDER</Link>
          </li>
          <li>
            <Link to="/">HELP</Link>
          </li>
          <li>
            <Link to="/">Log In</Link>
          </li>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart-dash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
