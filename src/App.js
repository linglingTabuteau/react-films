// import logo from "./logo.svg";
import React, { Component } from "react";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import CategoryFilter from "./containers/CategoryFilter/CategoryFilter";
import { movies$ } from "./movies";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // movies: [],
      filteredMovies: [],
      selectCategory: "",
    };
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  componentDidMount = async () => {
    try {
      let response = await movies$;
      let moviesList = [...response];
      this.setState({
        // movies: moviesList,
        filteredMovies: moviesList,
        selectCategory: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleDeleteCard = (deleteMovieId) => {
    console.log(this.state.movies);
    let moviesList = [...this.state.movies];
    let newMoviesList = moviesList.filter(
      (movie) => movie.id !== deleteMovieId
    );
    this.setState({
      movies: newMoviesList,
    });
  };

  handleSelectCategory = (category) => {
    this.setState({
      selectCategory: category,
    });
  };

  render() {
    let filteredMovies =[...this.state.filteredMovies];
    if (this.state.selectCategory) {
      // let moviesList = s
      filteredMovies = filteredMovies.filter(
        (movie) => movie.category == this.state.selectCategory
      );
    }
    return (
      <div className="App">
        <NavBar />
        <CategoryFilter
          moviesList={this.state.filteredMovies}
          onChangeCategory={this.handleSelectCategory}
          selectCategory={this.state.selectCategory}
        />
        <Cards
          moviesList={filteredMovies}
          deleteMovie={this.handleDeleteCard}
        />
      </div>
    );
  }
}

export default App;
