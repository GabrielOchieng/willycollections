import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import "./navbar.css"; // Assuming your styles are in this file
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import ItemSearchModal from "../itemsearchmodal/ItemSearchModal";
import { ProductContext } from "../../context/ProductContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalQuantity } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const { items } = useContext(ProductContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    const filteredResults = items.filter((item) =>
      item.itemName.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredResults);
    setIsModalOpen(searchTerm.length > 0); // Open modal when there's a search term
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // You can optionally handle form submission here, e.g., navigate to a search results page
  };

  return (
    <nav className="navbar navbar-expand-lg mb-5 fixed-top bg-light mb-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button
          className="navbar-toggler mb-2"
          type="button"
          onClick={toggleMenu}
          data-bs-toggle={isOpen ? "collapse" : ""}
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span className="close-icon">&#10006;</span> // X symbol using character code
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div>
          <Link to="/" className="navbar-brand font-bolder">
            WILLYCOLLECTIONS
          </Link>
        </div>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/create" className="nav-link active">
                SHOP ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/women" className="nav-link">
                WOMEN'S WEAR
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/men" className="nav-link">
                MEN'S WEAR
              </Link>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form
            role="search"
            className="mb-2 border rounded-pill d-flex navbar-collapse show"
            onSubmit={handleSearchSubmit}
          >
            <IoSearch className="searchicon cursor-pointer" />
            <input
              className="form-control bg-body-tertiary border-0 shadow-none"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
          {isModalOpen && (
            <ItemSearchModal
              searchResults={searchResults}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
        <div className="d-flex gap-3 align-items-center ms-0 ms-lg-4">
          <Link to="/cart" className="nav-link">
            <span className="text-danger">{totalQuantity}</span>
            <FiShoppingCart />
          </Link>
          <Link to="/auth" className="nav-link">
            {/* <span className="text-danger">{currentUser.email}</span> */}
            <IoPersonCircleOutline />
          </Link>
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
