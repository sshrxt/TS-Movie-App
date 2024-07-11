import { useState } from "react"
import { MovieType, PopularMovies} from "./components/trending/PopularMovies";
import Navbar from "./components/navbar/Navbar";



function App() {

  const [movies, setMovies] = useState<MovieType[]>([]);

  const [showPopularMovies, setShowPopularMovies] = useState(false);

  const togglePopularMovies = () => {
    console.log('hey')
    setShowPopularMovies(!showPopularMovies); // Toggle the state
  };
  

  return (
    <>
       <Navbar onButtonClick={togglePopularMovies} /> {/* Pass toggle function to Navbar */}
       {showPopularMovies && <PopularMovies movies={movies} setMovies={setMovies} />}
      
    </>
  )
}

export default App
