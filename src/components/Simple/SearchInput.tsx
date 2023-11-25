import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";


interface SearchInputProps {
  listItems: any[];
  onSearch: (filteredCrimes: any[]) => void;
  placeHolder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ listItems, onSearch, placeHolder }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    const filtered = listItems.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder={placeHolder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};


export default SearchInput;