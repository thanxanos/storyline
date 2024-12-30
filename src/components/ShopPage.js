import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import "../css/shoppage.css";

const ShopPage = () => {
  const [resultsText, setResultsText] = useState(50);

  return (
    <div className="shop">
      <div className="side-menu">
        <div className="menu-list">
          <div className="menu-text"><p>Romance</p></div>
          <div className="menu-text"><p>Fantasy</p></div>
          <div className="menu-text"><p>Science Fiction</p></div>
          <div className="menu-text"><p>Past Editions</p></div>
        </div>
      </div>
      <div className="search-results">
        <div className="search-wrapper">
          <input type="text" placeholder="search"></input>
          <LuSearch className="search-icon" />
        </div>
        <div className="search-text">
        <span>{resultsText} Results for “Search Term”</span>
      </div>
      </div>
    </div>
  );
};

export default ShopPage;
