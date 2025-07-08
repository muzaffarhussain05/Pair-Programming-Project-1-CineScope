import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
// --- IMPORTANT: Replace with your actual TMDB API Key ---
// Go to https://www.themoviedb.org/login to create an account if you don't have one.
// Then go to https://www.themoviedb.org/settings/api to request an API key (v3 auth).
// const TMDB_API_KEY = 'YOUR_TMDB_API_KEY'; // <--- !!! REPLACE THIS !!!

// const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
// const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// const POSTER_SIZE = 'w500'; // Common poster size. Can be 'w92', 'w154', 'w185', 'w342', 'w500', 'w780', or 'original'.

// Dummy data for trending movies
const TrendingMovies = [
  {
    "id": 1,
    "title": "Cosmic Voyage",
    "poster_path": "/path/to/cosmic_voyage_poster.jpg", // Replace with an actual TMDB path if you want images to show
    "release_date": "2024-10-26",
    "vote_average": 8.7,
    "overview": "A breathtaking journey through uncharted galaxies."
  },
  {
    "id": 2,
    "title": "The Last Echo",
    "poster_path": "/path/to/last_echo_poster.jpg",
    "release_date": "2025-01-15",
    "vote_average": 7.9,
    "overview": "In a post-apocalyptic world, a lone survivor seeks humanity's last hope."
  },
  {
    "id": 3,
    "title": "Whispers of the City",
    "poster_path": "/path/to/whispers_poster.jpg",
    "release_date": "2024-11-03",
    "vote_average": 8.1,
    "overview": "A detective uncovers a conspiracy hidden beneath the city's glamour."
  },
  {
    "id": 4,
    "title": "Quantum Leap",
    "poster_path": "/path/to/quantum_poster.jpg",
    "release_date": "2025-02-20",
    "vote_average": 9.0,
    "overview": "Scientists discover a way to bend time, but at what cost?"
  }
];

// Dummy data for popular movies
const PopularMovies = [
  {
    "id": 5,
    "title": "Ancient Scrolls",
    "poster_path": "/path/to/ancient_scrolls_poster.jpg",
    "release_date": "2024-09-10",
    "vote_average": 8.5,
    "overview": "An archaeologist deciphers ancient texts leading to a forgotten civilization."
  },
  {
    "id": 6,
    "title": "Robot Uprising",
    "poster_path": "/path/to/robot_uprising_poster.jpg",
    "release_date": "2025-03-01",
    "vote_average": 7.5,
    "overview": "When AI takes over, a small group fights for human survival."
  },
  {
    "id": 7,
    "title": "The Midnight Express",
    "poster_path": "/path/to/midnight_express_poster.jpg",
    "release_date": "2024-12-12",
    "vote_average": 8.2,
    "overview": "A thrilling ride on a train where every passenger has a secret."
  },
  {
    "id": 8,
    "title": "Green Planet",
    "poster_path": "/path/to/green_planet_poster.jpg",
    "release_date": "2025-04-05",
    "vote_average": 8.8,
    "overview": "A documentary exploring Earth's most fragile ecosystems and their future."
  }
];


const MovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     setLoading(true); // Ensure loading state is true at the start of fetch
  //     setError(null); // Clear any previous errors

  //     try {
  //       // --- Fetch Trending Movies (movies and TV shows from this week) ---
  //       const trendingResponse = await fetch(
  //         `${TMDB_BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}`
  //       );
  //       if (!trendingResponse.ok) {
  //         // If response is not OK (e.g., 401, 404, 500), throw an error
  //         throw new Error(`Failed to fetch trending: HTTP status ${trendingResponse.status}`);
  //       }
  //       const trendingData = await trendingResponse.json();
  //       // console.log("Trending Data:", trendingData); // For debugging
  //       setTrendingMovies(trendingData.results.slice(0, 8)); // Displaying more for variety

  //       // --- Fetch Popular Movies ---
  //       const popularResponse = await fetch(
  //         `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
  //       );
  //       if (!popularResponse.ok) {
  //         throw new Error(`Failed to fetch popular: HTTP status ${popularResponse.status}`);
  //       }
  //       const popularData = await popularResponse.json();
  //       // console.log("Popular Data:", popularData); // For debugging
  //       setPopularMovies(popularData.results.slice(0, 8)); // Displaying more for variety

  //     } catch (err) {
  //       // Catch any errors during the fetch or JSON parsing
  //       console.error("Error fetching movies:", err);
  //       setError(err.message);
  //     } finally {
  //       // This block always runs whether success or error
  //       setLoading(false);
  //     }
  //   };

  //   fetchMovies();
  //   // The empty dependency array ensures this effect runs only once after the initial render
  // }, []);

  // --- Conditional Rendering based on state ---

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
  //       <p className="text-white text-2xl animate-pulse">Loading movies...</p>
  //     </div>
  //   );
  // }

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
      {TrendingMovies.length === 0 ? (
        <p className="text-gray-400 text-center text-lg mb-12">No trending movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-16">
          {TrendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

     
      <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
        Popular Movies
      </h2>
      {PopularMovies.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">No popular movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {PopularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      
      <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
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
      )}
    </div>
  );
};

export default MovieList;