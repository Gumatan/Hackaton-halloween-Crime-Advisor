import "./reset.css";
import React from "react";
import axios from "axios";
import "./App.scss";
import Nav from "./Components/Nav";
import moviesCategories from "./moviesCategories";
import MovieCard from "./Components/MovieCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: null,
      category: "noFilter"
    };
  }
  getFilms() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        // data.movies.forEach(film => {
        //   film.category = filmCategories[film.id];
        // });
        console.log(data.movies);
        console.log();

        this.setState({
          films: data.movies
        });
      });
  }
  handleClick = event => {
    let newCategory = event.target.innerText;
    newCategory = newCategory.replace(" ", "_");
    if (newCategory !== this.state.category) {
      this.setState({ category: newCategory });
    } else {
      this.setState({ category: "noFilter" });
    }
  };
  componentDidMount() {
    this.getFilms();
  }

  render() {
    console.log();
    return (
      <div className="App">
        <Nav />
        <div className="categories">
          <div onClick={this.handleClick}>WTF</div>
          <div onClick={this.handleClick}>Paranormal</div>
          <div onClick={this.handleClick}>Serial killer</div>
          <div onClick={this.handleClick}>Several</div>
          <div onClick={this.handleClick}>Monstres</div>
          <div onClick={this.handleClick}>Brutal</div>
        </div>

        {this.state.films ? (
          this.state.films
            .filter(
              film =>
                this.state.category === "noFilter" ||
                moviesCategories[this.state.category].includes(film.id)
            )
            .map(film => <MovieCard {...film} />)
        ) : (
          <p>no data yet</p>
        )}
      </div>
    );
  }
}

export default App;
