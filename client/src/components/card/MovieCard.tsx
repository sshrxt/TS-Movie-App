import { MovieType } from "../trending/PopularMovies"
import { useState } from "react"
import DefaultImg from '../../assets/img-nofound.jpg'

type MovieCardProps = {
    movie: MovieType,
}


const MovieCard = ({movie}: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (): void => {
    setIsHovered(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  const truncateDescription = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    } else {
      return text;
    }
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = DefaultImg;
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img key = {movie.name} src= {`https://image.tmdb.org/t/p/w500${movie.imageUrl}`}  onError={handleImageError} alt={movie.name} />
      {isHovered && (
        <div className="overlay">
          <h3>{movie.name}</h3>
          <p>{truncateDescription(movie.description, 30)}</p>
        </div>
      )}
    </div>
  )
}

export default MovieCard
