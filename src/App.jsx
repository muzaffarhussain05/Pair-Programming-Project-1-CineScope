

import React, { useState,useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieContextProvider from './context/MovieContextProvider';
// import MovieContext from "./context/MovieContext"; 


import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Moviedetails from "./Pages/MovieDetails";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import YearFilter from "./components/YearFilter";
import MyList from "./pages/Mylist";
import NotFound from "./pages/NotFound";

function App() {
 const [darkMode, setDarkMode] = useState(false);
 const toggleDarkMode = () => setDarkMode((prev) => !prev); 
 


  return (
    <MovieContextProvider>
      <BrowserRouter>
        <div  className={`md:pt-20 pt-10 px-4 bg-[#1b0b0b]  ${darkMode? "bg-[#f2ecec] text-[#1b0b0b]" : "bg-[#1b0b0b] text-white"}  `}>
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/MovieDetails/:id" element={<><Moviedetails  /></>} />
            <Route path="/mylist" element={<><MyList /></>} />
            <Route path="/search/:name" element={<><SearchBar /></>} />
            <Route path="/search/genre" element={<><GenreFilter /></>} />
            <Route path="/search/year" element={<><YearFilter /></>} />

            {/* 🔥 No Navbar on 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
