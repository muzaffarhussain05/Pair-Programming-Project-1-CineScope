// import './App.css'
// import Navbar from './components/Navbar';
// import MovieContextProvider from './context/MovieContextProvider';

// function App() {
  

//   return (
//     <MovieContextProvider>
//     <Navbar/>
    
//     </MovieContextProvider>
//   )
// }

// export default App

// working in my system
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import WatchList from "./Pages/Watchlist";
import Moviedetails from "./Pages/MovieDetails";
import Favourite from "./pages/Favorites";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import YearFilter from "./components/YearFilter";

function App() {
   const [searchResults, setSearchResults] = useState([]);

  return (
    
      <BrowserRouter>
       <div className="pt-20 px-4 bg-[#1d0f0f] ">
        <Navbar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Watchlist" element={<WatchList />} />
            <Route path="/MovieDetails/:id" element={<Moviedetails />} />
              <Route path="/Favorites" element={<Favourite />} />
          </Routes>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
