import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navtitle">
        <h1>ACMEMART SHOPPING SITE</h1>
      </div>
      <div className="navul">
        <ul>
          <li>
            <Link to="/">SHOP ALL</Link>
          </li>
          <li>
            <Link to="/">ELECTRONICS</Link>
          </li>
          <li>
            <Link to="/">FURNITURE</Link>
          </li>
          <li>
            <Link to="/">HOUSEHOLDS</Link>
          </li>
          <li>
            <Link to="/">SCHOOL ITEMS</Link>
          </li>
        </ul>
      </div>

      <div className="navul">
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
