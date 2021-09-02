import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  categoryFilter: "",
  pagination: {
    currentPage: 0,
    itemsPerPage: 4,
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    initialize: (state, action) => {
      state.movies = action.payload;
    },
    deleteMovie: (state, action) => {
      let newMoviesList = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
      state.movies = newMoviesList;
    },
    changeMovieVote: (state, action) => {
      const movies = [...state.movies];
      const movieToUpdate = movies.find((m) => m.id === action.payload.movieId);
      movieToUpdate.likes = action.payload.likes;
      movieToUpdate.dislikes = action.payload.dislikes;

      state.action = movies;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.pagination.itemsPerPage = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
  },
});

export const {
  initialize,
  deleteMovie,
  changeMovieVote,
  setCurrentPage,
  setItemsPerPage,
  setCategoryFilter
} = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectFilteredMovies = (state) => {
  let filteredMovies = [...state.movies.movies];
  if (state.categoryFilter) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.category == state.categoryFilter
    );
  }
  
  return filteredMovies;
}
export const selectPagination = (state) => state.movies.pagination;
export const selectCategoryFilter = (state) => state.movies.categoryFilter;

export default moviesSlice.reducer;
