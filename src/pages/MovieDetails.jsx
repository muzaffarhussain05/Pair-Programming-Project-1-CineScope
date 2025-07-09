import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import MovieContext from "../context/MovieContext"; // adjust path as needed

const API_KEY = "a4574e2a6343d5ea405089950be10143";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // 🎯 Context values
  const {
    favorites,
    watchlist,
    toggleFavorite,
    toggleWatchlist,
  } = useContext(MovieContext);

  const isFavorited = favorites.some((m) => m.id === parseInt(id));
  const isWatchlisted = watchlist.some((m) => m.id === parseInt(id));

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Error fetching movie:", err));
  }, [id]);

  if (!movie)
    return <div className="text-white mt-10 text-center">Loading...</div>;

  return (
    <div className="bg-[#1d0f0f] text-white min-h-screen p-8 md:flex items-center">
      <div className="flex justify-center mb-6 relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-xl w-[300px]"
        />

        {/* Favorite & Watchlist Icons */}
        <div className="absolute top-2 right-2 flex gap-3">
          <button onClick={() => toggleFavorite(movie)} title="Favorite">
            {isFavorited ? (
              <FaHeart className="text-red-500 cursor-pointer" />
            ) : (
              <FaRegHeart className="text-white cursor-pointer hover:text-red-400" />
            )}
          </button>
          <button onClick={() => toggleWatchlist(movie)} title="Watchlist">
            {isWatchlisted ? (
              <FaBookmark className="text-yellow-400 cursor-pointer" />
            ) : (
              <FaRegBookmark className="text-white cursor-pointer hover:text-yellow-400" />
            )}
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-gray-300 mb-4">{movie.overview}</p>
        <p className="text-gray-300 mb-4">Popularity: {movie.popularity}</p>
        <p className="text-gray-300 mb-4">Total Votes: {movie.vote_count}</p>
        <p className="text-sm text-gray-400 flex flex-row justify-center items-center gap-2">
          Release: {movie.release_date} | Rating: {movie.vote_average}
          <FaStar className="w-5 h-5 text-yellow-400" />
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
