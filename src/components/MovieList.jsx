import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const TMDB_API_KEY = 'a4574e2a6343d5ea405089950be10143'; // <--- !!! REPLACE THIS !!!

const TMDB_BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w500'; // Common poster size. Can be 'w92', 'w154', 'w185', 'w342', 'w500', 'w780', or 'original'.


const MovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // Ensure loading state is true at the start of fetch
      setError(null); // Clear any previous errors

      try {
        // --- Fetch Trending Movies (movies and TV shows from this week) ---
        const trendingResponse = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}`
        );
        
        if (!trendingResponse.ok) {
          // If response is not OK (e.g., 401, 404, 500), throw an error
          throw new Error(`Failed to fetch trending: HTTP status ${trendingResponse.status}`);
        }
        const trendingData = await trendingResponse.json();
        // console.log("Trending Data:", trendingData); // For debugging
        setTrendingMovies(trendingData.results.slice(0, 8)); // Displaying more for variety

        // --- Fetch Popular Movies ---
        const popularResponse = await fetch(
          `${TMDB_BASE_URL}`
        );
        if (!popularResponse.ok) {
          throw new Error(`Failed to fetch popular: HTTP status ${popularResponse.status}`);
        }
        const popularData = await popularResponse.json();
        // console.log("Popular Data:", popularData); // For debugging
        setPopularMovies(popularData.results.slice(0, 8)); // Displaying more for variety

      } catch (err) {
        // Catch any errors during the fetch or JSON parsing
        console.error("Error fetching movies:", err);
        setError(err.message);
      } finally {
        // This block always runs whether success or error
        setLoading(false);
      }
    };

    fetchMovies();
    // The empty dependency array ensures this effect runs only once after the initial render
  }, []);



  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-2xl animate-pulse">Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
        <p className="text-red-500 text-xl font-bold mb-4">Error fetching data:</p>
        <p className="text-red-300 text-lg text-center">{error}</p>
        <p className="text-gray-400 mt-4">Please check your API key and internet connection.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  p-8">
     
      <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
        Trending This Week
      </h2>
      {trendingMovies.length === 0 ? (
        <p className="text-gray-400 text-center text-lg mb-12">No trending movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-16">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

     
      <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
        Popular Movies
      </h2>
      {popularMovies.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">No popular movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      
      {/* <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
        Latest
      </h2>
      {PopularMovies.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">No popular movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {PopularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default MovieList;