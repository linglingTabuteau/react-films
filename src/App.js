// import logo from "./logo.svg";
import React, { Component } from "react";
import CardFilm from "./components/Card";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import { movies$ } from "./movies";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }
  componentDidMount = async () => {
    try {
      let response = await movies$;
      let moviesList = [...response];
      this.setState({
        movies: moviesList,
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

  render() {
    console.log(this.state.movies);
    return (
      <div className="App">
        <NavBar />
        <Cards
          moviesList={this.state.movies}
          deleteMovie={this.handleDeleteCard}
        />
      </div>
    );
  }
}

export default App;
