import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const API_KEY = 'a4574e2a6343d5ea405089950be10143';

const genres = [
  { name: 'Action', id: 28 },
  { name: 'Comedy', id: 35 },
  { name: 'Drama', id: 18 },
  { name: 'Horror', id: 27 },
  { name: 'Sci-Fi', id: 878 },
  { name: 'Romance', id: 10749 },
  { name: 'Animation', id: 16 },
  { name: 'Documentary', id: 99 },
];

const GenreFilter = () => {
  const [selectedGenre, setSelectedGenre] = useState(28);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!selectedGenre) return;

    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}`
      );
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [selectedGenre]);

 
  return (
    <div className="p-1 bg-[#1e0f0f] text-white md:px-[124px]">
      <h2 className="text-2xl font-bold mb-4">Explore by Genre</h2>

      {/* Genre Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
            className={`px-4 py-2 cursor-pointer rounded-md text-sm font-medium whitespace-nowrap
              ${
                selectedGenre == genre.id
                  ? 'bg-[#7c4444] text-white'
                  : 'bg-[#4b2a2a] text-white hover:bg-[#6b3c3c] transition'
              }`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
