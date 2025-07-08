import React from 'react'


const MovieCard = ({ movie,name }) => {
  // const posterUrl = movie.poster_path
  //   ? `${TMDB_IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` // Still uses TMDB_IMAGE_BASE_URL
  //   : 'https://via.placeholder.com/500x750?text=No+Image';

 let posterUrl="https://image.tmdb.org/t/p/w500";
 

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden
                    transform hover:scale-105 transition-transform duration-300 ease-in-out
                    cursor-pointer">
      <img
        src={`${posterUrl}${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="w-full   h-92 object-cover  object-center"
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