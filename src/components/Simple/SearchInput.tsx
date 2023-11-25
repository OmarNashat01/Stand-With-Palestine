import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";


// Create the SearchInput component
const SearchInput = () => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Search by article or crime instance..."
      />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchInput;