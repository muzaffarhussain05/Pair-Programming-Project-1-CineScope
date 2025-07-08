import React from 'react'
import MovieList from "../components/MovieList"
const Home = ({ searchResults }) => {
  return (
    <div className=''>
  <MovieList movies={searchResults}/>
  </div>
  )
}

export default Home