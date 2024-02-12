import React, { useState, useRef } from "react";
import "./Search-bar.scss";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  const handleIconClick = (e) => {
    e.preventDefault();
    setActive(!active);

    setSearchText("");
    inputRef.current.focus();
  };

  return (
    <div className="search">
      <form className="search-bar">
        <input
          type="text"
          className={active ? "input active" : "input"}
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn" type="submit" onClick={handleIconClick}>
          <AiOutlineSearch className="icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
