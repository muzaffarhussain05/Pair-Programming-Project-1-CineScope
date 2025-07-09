// pages/MyList.jsx
import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';

const Favourite = [
  {
    title: 'The Enigma Code',
    image: 'https://via.placeholder.com/160x240?text=The+Enigma+Code',
  },
  {
    title: 'Starlight Symphony',
    image: 'https://via.placeholder.com/160x240?text=Starlight+Symphony',
  },
  {
    title: 'The Silent Witness',
    image: 'https://via.placeholder.com/160x240?text=Silent+Witness',
  },
  {
    title: 'Echoes of the Past',
    image: 'https://via.placeholder.com/160x240?text=Echoes+of+the+Past',
  },
  {
    title: 'Crimson Horizon',
    image: 'https://via.placeholder.com/160x240?text=Crimson+Horizon',
  },
  {
    title: 'Whispers of the Deep',
    image: 'https://via.placeholder.com/160x240?text=Whispers+of+the+Deep',
  },
];

const MyList = () => {
  const [activeTab, setActiveTab] = useState('favorites');

  return (
    <div className="bg-[#1b0b0b] min-h-screen px-6 py-10 text-white">
      <h1 className="text-2xl font-bold mb-6">My List</h1>

      <div className="flex border-b border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab('favorites')}
          className={`mr-6 pb-2 ${
            activeTab === 'favorites'
              ? 'border-b-2 border-white text-white'
              : 'text-gray-400'
          }`}
        >
          Favorites
        </button>
        <button
          onClick={() => setActiveTab('watchlist')}
          className={`pb-2 ${
            activeTab === 'watchlist'
              ? 'border-b-2 border-white text-white'
              : 'text-gray-400'
          }`}
        >
          Watchlist
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {activeTab === 'favorites' &&
          favorites.map((movie, index) => (
            <MovieCard key={index} title={movie.title} image={movie.image} />
          ))}

        {activeTab === 'watchlist' && (
          <p className="text-gray-400">Your watchlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Favourite;
