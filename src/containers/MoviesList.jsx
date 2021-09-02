// import logo from "./logo.svg";
import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Movies from "../components/Movies";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import Pagination from "./Pagination";
import { movies$ } from "../api/movies";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovies: [],
      selectCategory: "",
      pagination: { page: 0, numberOfItems: 4 },
    };
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleOnChangeVoteCount = this.handleOnChangeVoteCount.bind(this);
    this.handleChangePagination = this.handleChangePagination.bind(this);
  }

  componentDidMount = async () => {
    try {
      let response = await movies$;
      let moviesList = [...response];
      this.setState({
        filteredMovies: moviesList,
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleDeleteCard = (deleteMovieId) => {
    let moviesList = [...this.state.filteredMovies];
    let newMoviesList = moviesList.filter(
      (movie) => movie.id !== deleteMovieId
    );
    this.setState({
      filteredMovies: newMoviesList,
    });
  };

  handleSelectCategory = (category) => {
    this.setState({
      selectCategory: category,
    });
  };

  handleOnChangeVoteCount = (movieId, vote) => {
    let updatedMovies = [...this.state.filteredMovies];
    let toUpdatedMovie = updatedMovies.find((movie) => movie.id == movieId);
    toUpdatedMovie.likes = vote.like;
    toUpdatedMovie.dislikes = vote.dislike;
    this.setState({
      filteredMovies: updatedMovies,
    });
  };

  handleChangePagination = (pagination) => {
    this.setState({ pagination: pagination });
  };

  render() {
    let filteredMovies = [...this.state.filteredMovies];
    if (this.state.selectCategory) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.category == this.state.selectCategory
      );
    }
    const paginationStartIndex =
      this.state.pagination.page * this.state.pagination.numberOfItems;
    const paginatedMovies = filteredMovies.slice(
      paginationStartIndex,
      paginationStartIndex + this.state.pagination.numberOfItems
    );
    return (
      <div className="App">
        <NavBar />
        <CategoryFilter
          moviesList={this.state.filteredMovies}
          onChangeCategory={this.handleSelectCategory}
          selectCategory={this.state.selectCategory}
        />
        <Movies
          moviesList={paginatedMovies}
          deleteMovie={this.handleDeleteCard}
          handleOnChangeVoteCount={this.handleOnChangeVoteCount}
        />
        <Pagination
          items={filteredMovies}
          onPaginationChanged={this.handleChangePagination}
        />
      </div>
    );
  }
}

export default MoviesList;
