import React, { useState, useRef } from "react";
import "./Search-bar.scss";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [active, setActive] = useState(false);

  const handleIconClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="search">
      <form className="search-bar">
        <input
          type="text"
          className={active ? "input active" : "input"}
          placeholder="Search"
        />
        <button className="btn" type="submit" onClick={handleIconClick}>
          <AiOutlineSearch className="icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
