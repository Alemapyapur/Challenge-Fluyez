import { configureStore } from "@reduxjs/toolkit";
import moviesStore from "./moviesStore"

export const store = configureStore({
  reducer: {
    movies: moviesStore,
  },
});