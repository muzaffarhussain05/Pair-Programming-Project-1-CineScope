import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
 const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/MovieDetails/${movie.id}`);
  };
  return (
   
    <div onClick={handleClick} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden
                    transform hover:scale-105 transition-transform duration-300 ease-in-out
                    cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="w-full h-96 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold truncate">
          {movie.title || movie.name}
        </h3>
        {movie.release_date && (
            <p className="text-gray-400 text-sm mt-1">
                Release: {new Date(movie.release_date).getFullYear()}
            </p>
        )}
      </div>
    </div>
      
  );
};

export default MovieCard