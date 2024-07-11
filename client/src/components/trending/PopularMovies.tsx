import React, {useEffect } from "react";

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
    <div>
      {movies.map((movie) => {
        console.log(`https://image.tmdb.org/t/p/w500$${movie.imageUrl}`)
        return <img key = {movie.name} src= {`https://image.tmdb.org/t/p/w500${movie.imageUrl}`} alt={movie.name} />
      })}
    </div>
  );
};
