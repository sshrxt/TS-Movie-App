import { MovieType } from "../trending/PopularMovies";
import { convertData } from "../trending/PopularMovies";
import { useEffect} from "react";
import MovieCard from "../card/MovieCard";

type AdvancedMoviesProps = {
  movies: MovieType[];
  setMovies: React.Dispatch<React.SetStateAction<MovieType[]>>;
  query: string;
};

const AdvancedMovies = ({movies, setMovies, query }: AdvancedMoviesProps) => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://localhost:8000/search?search=${query}`);
        const data = await response.json();
        const results: any[] = data.results;
        setMovies(convertData(results));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [query, setMovies]);

  
  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <MovieCard key = {index} movie={movie}/>
      ))}
    </div>
  );
};

export default AdvancedMovies;
