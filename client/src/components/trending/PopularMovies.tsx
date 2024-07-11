import React, {useEffect } from "react";
import MovieCard from "../card/MovieCard";

export type MovieType = {
  name: string,
  imageUrl: string,
  description: string, 
}

type PopularMoviesProps = {
  movies: MovieType[];
  setMovies: React.Dispatch<React.SetStateAction<MovieType[]>>;
};

function convertData(results: any[]): MovieType[] {
  return results.map((movie) => ({
      name: movie.title,
      imageUrl: movie.poster_path,
      description: movie.overview,
  }))
};

export const PopularMovies = ({ movies, setMovies }: PopularMoviesProps) => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8000/trending");
        const data = await response.json();
        const results: any[] = data.results;
        setMovies(convertData(results))
        
        console.log(movies);
        
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [setMovies]);

  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <MovieCard key = {index} movie={movie}/>
      ))}
    </div>
  );
};
