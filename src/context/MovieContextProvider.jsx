import React, { useState } from 'react'
import MovieContext from './MovieContext'
const MovieContextProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const toggleFavorite = (movie) => {
    setFavorites((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };
  return (
    <MovieContext.Provider value= { {favorites, watchlist, toggleFavorite, toggleWatchlist,darkMode,setDarkMode} }>   {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider