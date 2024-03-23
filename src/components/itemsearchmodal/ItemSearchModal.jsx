import React from "react";
import { Link } from "react-router-dom";

const ItemSearchModal = ({
  searchResults,
  onClose,
  searchTerm,
  handleSearchSubmit,
}) => {
  console.log(searchTerm);
  return (
    <div className="search-results-modal position-absolute top-100 end-0 col-sm-12 col-md-6 col-lg-3">
      <div className="bg-light rounded p-3 shadow">
        <div className="d-flex justify-content-between mb-3">
          <h6 className="mb-2">Search Results</h6>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          />
        </div>

        {searchResults.length > 0 ? (
          <ul className="list-group">
            {searchResults.map((item) => (
              <li key={item.itemID} className="list-group-item">
                <Link
                  to={`/item/${item.itemID}`}
                  onClick={handleSearchSubmit}
                  className="link"
                >
                  {item.itemName}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No results found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default ItemSearchModal;
