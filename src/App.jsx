import React, { useState,useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieContextProvider from './context/MovieContextProvider';



import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Moviedetails from "./Pages/MovieDetails";
import Favourite from "./pages/Favorites";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import YearFilter from "./components/YearFilter";
import MyList from "./pages/Mylist";
import NotFound from "./pages/NotFound";

function App() {
 
 


  return (
    <MovieContextProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/MovieDetails/:id" element={<><Navbar /><Moviedetails /></>} />
            <Route path="/mylist" element={<><Navbar /><MyList /></>} />
            <Route path="/search/:name" element={<><Navbar /><SearchBar /></>} />
            <Route path="/search/genre" element={<><Navbar /><GenreFilter /></>} />
            <Route path="/search/year" element={<><Navbar /><YearFilter /></>} />

            {/* 🔥 No Navbar on 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
