import React from 'react'
import { LuSearch } from "react-icons/lu";
import '../css/shoppage.css'


const ShopPage = () => {
  return (
    <div className='shop-wrapper'>
      <div className='search-wrapper'><input type="text" placeholder="search"></input><LuSearch className="search-icon" />
      </div>
    </div>
  )
}

export default ShopPage