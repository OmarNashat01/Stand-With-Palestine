import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";
import { Link } from "react-router-dom";

interface SearchInputProps {
  listItems: any[];
  onSearch: (filteredCrimes: any[]) => void;
  placeHolder: string;
  showList?:boolean;
  modifiedList?:any;
  onClickFunc?: () => void;
  defaultSearchTerm?:string;
  excludeList?:any;
}

const SearchInput: React.FC<SearchInputProps> = ({ listItems, onSearch, placeHolder, showList=false, modifiedList=[], onClickFunc=()=>{},
defaultSearchTerm="", excludeList=[]
}) => {
  const [searchTerm, setSearchTerm] = useState<string>(defaultSearchTerm);

  const handleSearch = () => {
    const filtered = listItems.filter((item) => {
      const itemString = JSON.stringify(item).toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return itemString.includes(searchTermLower) && !excludeList.some((exclude:any) => itemString.includes(exclude.toLowerCase()));
    });
    onSearch(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <>
    <div className="search-box" style={{marginTop: (showList)? '0.2rem':'2rem'}}>
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
    {showList && <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
    <ul style={{marginLeft: '-5px'}}>
      {modifiedList.map((item:any, index:any) => (
        <a href={`#${item.title.replace(/\s+/g, '-')}`} ><div
        key={index}
        className="search-item"
        style={{
          borderBottom: '1px solid rgba(99,99,99,0.3)',
          padding: '8px 4px 8px 4px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '8px'
        }}
        onClick={()=>onClickFunc()}
      >
        <div style={{ flex: 1 }}>{item.title}</div>
        <div style={{ marginLeft: '20px' }}>{(item.date!==undefined)?item.date:'2023'}</div>
      </div>
      </a>
      ))}
    </ul>
  </div>}
    </>
  );
};


export default SearchInput;