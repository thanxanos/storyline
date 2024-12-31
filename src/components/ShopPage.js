import React, { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import "../css/shoppage.css";
import BookCard from './BookCard.js';
import axios from 'axios';


const ShopPage = () => {
  const API_URL = 'https://example-data.draftbit.com/books?_limit=100'
  const [books, setBooks] = useState([])
  const [bookResult, setBookResult] = useState(books)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(()=> {
    axios.get(API_URL).then(res=> {
      setBooks(res.data)
      setBookResult(res.data)
    }).catch(err=>console.log(err))
  }, [API_URL]);

  const defaultFilter = () => {
    return setBookResult(books)
  }

  const Filter = (e) => {
    setSearchTerm(e.target.value)
    setBookResult(books.filter(i => i.title.includes(searchTerm) || i.authors.includes(searchTerm)))
  }
  
  const FilterRomance = () => {
    setBookResult(books.filter(i => i.genre_list.includes("Romance")))
  }

  const FilterFantasy = () => {
    setBookResult(books.filter(i => i.genre_list.includes("Fantasy")))
  }

  const FilterScifi = () => {
    setBookResult(books.filter(i => i.genre_list.includes("Science Fiction")))
  }


  return (
    <div className="shop-wrapper" id="shop">
      <div className="side-menu">
        <div className="menu-list">
          <div className="menu-text" onClick={() => defaultFilter()}><p>All</p></div>
          <div className="menu-text" onClick={() => FilterRomance()}><p>Romance</p></div>
          <div className="menu-text" onClick={() => FilterFantasy()}><p>Fantasy</p></div>
          <div className="menu-text" onClick={() => FilterScifi()}><p>Science Fiction</p></div>
          {/* <div className="menu-text"><p>Past Editions</p></div> */}
        </div>
      </div>
      <div className="search-results">
        <div className="search-wrapper">
          <input 
          type="text" 
          placeholder="search all titles or authors"
          value={searchTerm}
          onChange={Filter}
          ></input>
          <LuSearch className="search-icon" />
        </div>
        <div className="search-text">
          {searchTerm ? <span>{bookResult.length} Results for {searchTerm}</span> : <span></span>}
        </div>
      <div className="results-wrapper">
        {
            bookResult.map((book) => {
              return (
                <BookCard key = {book.id} bookInfo={book} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
