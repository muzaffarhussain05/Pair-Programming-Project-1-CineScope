import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_KEY = 'a4574e2a6343d5ea405089950be10143';

// Generate a list of years (e.g., 2025 → 1980)
const years = Array.from({ length: 2025 - 1980 + 1 }, (_, i) => 2025 - i);

const YearFilter = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!selectedYear) return;

    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&year=${selectedYear}`
      );
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [selectedYear]);

  return (
    <div className="p-1 bg-[#1e0f0f] text-white md:px-[124px]">
      <h2 className="text-2xl font-bold mb-4">Explore by Year</h2>

      {/* Year Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 cursor-pointer rounded-md text-sm font-medium whitespace-nowrap
              ${
                selectedYear === year
                  ? 'bg-[#7c4444] text-white'
                  : 'bg-[#4b2a2a] text-white hover:bg-[#6b3c3c] transition'
              }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Movie Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default YearFilter;
