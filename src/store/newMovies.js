import { createSlice } from "@reduxjs/toolkit";

// Agregar manualmente una nueva pelicula

const initialState = {
  movies: [
    { Id: "Hjw85tupa3c", Title: "Lo que el viento se llevo", Year: "1989-02-11", State: "Activo" },
    { Id: "Q5djx2g209a", Title: "mamá coco", Year: "2008-02-12", State: "Inactivo" },
    { Id: "03zsvtn0sndh", Title: "alerta oja", Year: "2021-02-16", State: "Activo" },
    { Id: "L3j76x9vwo", Title: "mision imposible", Year: "2019-02-31", State: "Activo" },
    { Id: "5qofywnzhnl", Title: "la momia", Year: "2004-02-19", State: "Inactivo" },
    { Id: "E5y8ybj07ke", Title: "busqueda implacable", Year: "2012-02-21", State: "Activo" }
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      // payload sin destructurar
      state.movies.push(action.payload);
    },
    editMovies: (state, action) => {
      const movies = window.localStorage.getItem('movies');
      if (movies) {
        const moviesArr = JSON.parse(movies);
        moviesArr.forEach((item) => {
          if (item.Id === action.payload.id) {
            item.Title = action.payload.Title;
            item.Year = action.payload.Yaer;
            item.State = action.payload.State;
          }
        });
        window.localStorage.setItem('movies', JSON.stringify(moviesArr));
        state.movies = [...moviesArr];
      }
      // const lista = state.movies.map((item) => {
      //   if (item.Id === action.payload.Id) {
      //     item.Title = action.payload.Title
      //     item.Year = action.payload.Yaer;
      //     item.State = action.payload.State;
      //   }
      //   return item
      // });
      // state.movies = lista
    },
    deleteMovies: (state, action) => {
      console.log(action)
      const lista = state.movies.filter((item) =>
        item.Id !== action.payload
      );
      state.movies = lista
      // state.movies.splice(action.payload, 1)

    },
  },
});

export const { addMovies, editMovies, deleteMovies } = movieSlice.actions;
export default movieSlice.reducer;