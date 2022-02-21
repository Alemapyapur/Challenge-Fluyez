import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../services/apiKey";
import { API } from "../services/api";

// Sincronizar por tipo: peliculas
export const asyncMovies = createAsyncThunk(
  "movies/asyncMovies",
  async (t) => {
    const response = await API.get(`?apiKey=${APIKey}&s=${t}&type=movie`);
    return response.data;
  }
);

// Sincronizar por tipo: series
export const asyncShows = createAsyncThunk(
  "movies/asyncShows",
  async (t) => {
    const response = await API.get(`?apiKey=${APIKey}&s=${t}&type=series`);
    return response.data;
  }
);

// Detalle completo de las tramas
export const asyncMoreDetail = createAsyncThunk(
  "movies/asyncMoreDetail",
  async (i) => {
    const response = await API.get(`?apiKey=${APIKey}&i=${i}&Plot=full`);
    console.log(response)
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [asyncMovies.pending]: () => {
      console.log("Pending");
    },
    [asyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [asyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [asyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [asyncMoreDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;


export default movieSlice.reducer;