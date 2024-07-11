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
      <form className="search-container">
        <input className='search' type="text" placeholder="Search for a Movie..."/>
        <button className="submit-button" type="submit" id="submit-button">
          <img src={Search} alt="" />
        </button>
      </form>
      <button onClick={onButtonClick} className="trending">Trending Now</button>
    </div>
  )
}

export default Navbar
