import { configureStore } from "@reduxjs/toolkit";
import moviesStore from "./moviesStore"
import newMoviesStore from "./newMovies"

export const store = configureStore({
  reducer: {
    movies: moviesStore,
    newMovies: newMoviesStore,
  },
});