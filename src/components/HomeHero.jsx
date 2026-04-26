import React, { useContext } from 'react'
import "./HomeHero.css"
import searchIcon from "../assets/searchIcon.png"
import { searchContext } from '../context/SearchContext';
const HomeHero = () => {
  const { searchTerm, setSearchTerm } = useContext(searchContext);
  return (
    <>
    <div className="HomeHeroDiv">
       <div className="heroL">
         <h1>Find Your Perfect Laptop</h1>
      <div className="searchDiv">
          <input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='searchInp'
            type="text"
            placeholder='Search...'
          />
          <img src={searchIcon} alt="searchIcon" />
      </div>
       <button>Near You</button>
       </div>
    </div>
    </>
  )
}

export default HomeHero