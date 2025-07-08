import { createRoot } from "react-dom/client";
import "./index.css";
import MovieContextProvider from "./context/MovieContextProvider";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
);

createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <RouterProvider router={router} />
  </MovieContextProvider>
);
