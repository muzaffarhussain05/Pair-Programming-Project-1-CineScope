// import { createRoot } from "react-dom/client";
// import "./index.css";
// import MovieContextProvider from "./context/MovieContextProvider";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Home from "./pages/Home";

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
// );

// createRoot(document.getElementById("root")).render(
//   <MovieContextProvider>
//     <RouterProvider router={router} />
//   </MovieContextProvider>
// );

// working in my system

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


