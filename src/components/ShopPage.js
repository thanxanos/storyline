import React from 'react'
import { LuSearch } from "react-icons/lu";
import '../css/shoppage.css'


const ShopPage = () => {
  return (
    <div className='shop-wrapper'>
      <div className='side-menu'>
        <div className='menu-list'>
          <p>Romance</p>
          <p>Fantasy</p>
          <p>Science Fiction</p>
          <p>Past Editions</p>
        </div>
      </div>
      <div className='search-results'>
        <div className='search-wrapper'>
          <input type="text" placeholder="search"></input><LuSearch className="search-icon" />
        </div>
      </div>
    </div>
  )
}

export default ShopPage