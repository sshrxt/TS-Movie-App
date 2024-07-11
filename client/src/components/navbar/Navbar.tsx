import React from "react";
import Search from '../../assets/search.svg'

type NavbarProps = {
  onButtonClick: () => void; 
};




const Navbar: React.FC<NavbarProps> = ({ onButtonClick }) => {
  return (
    <div className = "navbar">
      <div className="logo">
        <h1>Movie</h1>
      </div>
      <div className="search-container">
        <input className='search' type="text" />
        <button className="submit-button" type="submit">
          <img src={Search} alt="" />
        </button>
      </div>
      <button onClick={onButtonClick} className="trending">Trending Now</button>
    </div>
  )
}

export default Navbar
