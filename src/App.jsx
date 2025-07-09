import React, { useState,useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieContextProvider from './context/MovieContextProvider';



import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Moviedetails from "./Pages/MovieDetails";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import YearFilter from "./components/YearFilter";
import MyList from "./pages/Mylist";
import NotFound from "./pages/NotFound";
import TVShowList from "./components/TVShowList";
import ShowDetails from "./pages/ShowDetails";
import PeopleList from "./components/PeopleList";

function App() {
 
 


  return (
    <MovieContextProvider>
      <BrowserRouter>
        <div className="md:pt-20 pt-10 px-4 bg-[#1b0b0b]">
          <Routes>
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/MovieDetails/:id" element={<><Navbar /><Moviedetails /></>} />
            <Route path="/mylist" element={<><Navbar /><MyList /></>} />
            <Route path="/search/:name" element={<><Navbar /><SearchBar /></>} />
            <Route path="/search/genre" element={<><Navbar /><GenreFilter /></>} />
            <Route path="/search/year" element={<><Navbar /><YearFilter /></>} />
            <Route path="/tvshow" element={<><Navbar /><TVShowList /></>} />
            <Route path="/tvshow/:id" element={<><Navbar /><ShowDetails /></>} />
            <Route path="/person/popular" element={<><Navbar /><PeopleList /></>} />

            {/* 🔥 No Navbar on 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
