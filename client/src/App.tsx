import { useState } from "react"
import { MovieType, PopularMovies} from "./components/trending/PopularMovies";
import AdvancedMovies from "./components/advanced/advancedMovies";
import Navbar from "./components/navbar/Navbar";



function App() {

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [query, setQuery] = useState('');

  const [showPopularMovies, setShowPopularMovies] = useState(false);
  const [whichMovieOption, setWhichMovieOption] = useState("nothing");

  const togglePopularMovies = () => {
    setWhichMovieOption("trending")
    setShowPopularMovies(!showPopularMovies); // Toggle the state
  };

  const handleSearch = (query: string): void => {
    setWhichMovieOption("advanced")
    setQuery(query)
  }
  
  return (
    <>
       <Navbar onButtonClick={togglePopularMovies} onSearch={handleSearch} /> 
       {showPopularMovies && whichMovieOption === "trending" && <PopularMovies movies={movies} setMovies={setMovies} />}
       <AdvancedMovies movies={movies} setMovies={setMovies} query={query}/>
       
    </>
  )
}

export default App
