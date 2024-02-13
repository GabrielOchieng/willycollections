import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navtitle">
        <h1>ACMEMART SHOPPING SITE</h1>
      </div>
      <div className="navul">
        <ul>
          <li>SHOP ALL</li>
          <li>ELECTRONICS</li>
          <li>HOUSEHOLDS</li>
          <li>FURNITURE</li>
          <li>SCHOOL ITEMS</li>
        </ul>
      </div>

      <div className="navul">
        <ul>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>TRACK ORDER</li>
          <li>HELP</li>
          <li>Log In</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
