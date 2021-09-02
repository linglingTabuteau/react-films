import React from "react"
import NavBar from "../components/NavBar/NavBar";
import Movies from "../components/Movies";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import Pagination from "./Pagination";
import { movies$ } from "../api/movies";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovies,
  selectPagination,
  selectCategoryFilter,
  initialize
} from "../features/movies/moviesSlice";

function MoviesList() {
  
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const pagination = useSelector(selectPagination);
  const selectCategory = useSelector(selectCategoryFilter);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response = await movies$;
        let moviesList = [...response];
        dispatch(initialize(moviesList));
      } catch (e) {
        console.log(e);
      }
      
    };

    fetchMovies();
  }, [dispatch]);

  let filteredMovies = [...movies];
  if (selectCategory) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.category == selectCategory
    );
  }
  const paginationStartIndex =
    pagination.currentPage * pagination.itemsPerPage;
  const paginatedMovies = filteredMovies.slice(
    paginationStartIndex,
    paginationStartIndex + pagination.itemsPerPage
  );

  return (
    <div className="App">
      <NavBar />
      <CategoryFilter />
      <Movies moviesList={paginatedMovies} />
      <Pagination moviesList={filteredMovies} />
    </div>
  );
}

export default MoviesList;
