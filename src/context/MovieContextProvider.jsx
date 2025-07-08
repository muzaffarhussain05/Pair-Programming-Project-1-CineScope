import React, { useState } from 'react'
import MovieContext from './MovieContext'
const MovieContextProvider = ({children}) => {
    const [user,setUser]=useState()
  return (
    <MovieContext.Provider value={{
        user,setUser
    }}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider