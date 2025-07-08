// MovieDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const API_KEY = "a4574e2a6343d5ea405089950be10143"; // Replace with your key


const MovieDetails = ({movieId}) => {
   const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`
https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Error fetching movie:", err));
  }, [id]);

  if (!movie) return <div className="text-white mt-10 text-center">Loading...</div>;
  return (
    <div className="bg-[#1d0f0f] text-white min-h-screen p-8">
      <div className="flex justify-center mb-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-xl w-[300px]"
        />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-gray-300 mb-4">{movie.overview}</p>
         <p className="text-gray-300 mb-4">Popularity: {movie.popularity}</p>
         <p className="text-gray-300 mb-4">Total Votes: {movie.vote_count}</p>                                                
        <p className="text-sm text-gray-400 flex flex-row justify-center">
          Release: {movie.release_date} | Rating: {movie.vote_average} <FaStar className="w-5 h-5"/>
        </p>
      </div>
    </div>
  )
}

export default MovieDetails