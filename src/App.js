// import logo from "./logo.svg";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards/Cards";
import CategoryFilter from "./containers/CategoryFilter/CategoryFilter";
import { movies$ } from "./movies";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        filteredMovies: moviesList,
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleDeleteCard = (deleteMovieId) => {
    console.log(this.state.movies);
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

  render() {
    let filteredMovies =[...this.state.filteredMovies];
    if (this.state.selectCategory) {
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
