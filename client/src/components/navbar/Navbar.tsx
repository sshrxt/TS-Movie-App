import React from "react";
import Search from '../../assets/search.svg'
import { useState } from "react";

type NavbarProps = {
  onButtonClick: () => void,
  onSearch: (query: string) => void 
};




const Navbar: React.FC<NavbarProps> = ({ onButtonClick, onSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className = "navbar">
      <div className="logo">
        <h1>Movie</h1>
      </div>
      <form className="search-container" onSubmit={handleSubmit}>
        <input 
          minLength={2}
          className='search' 
          type="text" 
          placeholder="Search for a Movie..."
          value={searchQuery}
          onChange={handleInputChange}
          />
        <button className="submit-button" type="submit" id="submit-button">
          <img src={Search} alt="" />
        </button>
      </form>
      <button onClick={onButtonClick} className="trending">Trending Now</button>
    </div>
  )
}

export default Navbar
