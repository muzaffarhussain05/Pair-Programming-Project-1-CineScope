// pages/MyList.jsx
import React, { useState, useContext } from "react";

import MovieCard from "../components/MovieCard";
import MovieContext from "../context/MovieContext"; // Adjust path if needed

const MyList = () => {
  const { favorites, watchlist, toggleFavorite, toggleWatchlist } =
    useContext(MovieContext);
  const [activeTab, setActiveTab] = useState("favorites");

  return (
    <div className="bg-[#1b0b0b] min-h-screen px-[124px] py-10 text-white ">
      <h1 className="text-3xl font-bold mb-6">My List</h1>

      <div className="flex border-b border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("favorites")}
          className={`mr-6  cursor-pointer pb-2 ${
            activeTab === "favorites"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
        >
          Favorites
        </button>
        <button
          onClick={() => setActiveTab("watchlist")}
          className={`pb-2 cursor-pointer ${
            activeTab === "watchlist"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
        >
          Watchlist
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
      {activeTab === "favorites" && (
    favorites.length === 0 ? (
      <p className="text-gray-400 text-lg">Your favorites list is empty.</p>
    ) : (
      favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))
    )
  )}

{activeTab === "watchlist" && (
  watchlist.length === 0 ? (
    <p className="text-gray-400 text-lg">Your watchlist is empty.</p>
  ) : (
    watchlist.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))
  )
)}

      </div>
    </div>
  );
};

export default MyList;
