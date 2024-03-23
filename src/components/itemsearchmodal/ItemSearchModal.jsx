import React from "react";
import { Link } from "react-router-dom";

const ItemSearchModal = ({ searchResults, onClose }) => {
  return (
    <div className="search-results-modal position-absolute top-100 start-0 w-100">
      <div className="bg-light rounded p-3 shadow">
        <h6 className="mb-2">Search Results</h6>
        <button
          type="button"
          className="btn-close float-end"
          aria-label="Close"
          onClick={onClose}
        />
        {searchResults.length > 0 ? (
          <ul className="list-group">
            {searchResults.map((item) => (
              <li key={item.itemID} className="list-group-item link">
                <Link to={`/item/${item.itemID}`}>{item.itemName}</Link>
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
