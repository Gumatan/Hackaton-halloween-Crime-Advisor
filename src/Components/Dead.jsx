import React from "react";
import axios from "axios";
import "./Dead.scss";
import Categories from "./Categories";
import Movies from "./Movies";
import Nav from "./Nav";
import moviesCategories from "../moviesCategories";
let audio = document.createElement("audio");
audio.src = "cris.mp3";
class Dead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      films: null,
      category: "All"
    };
  }

  getFilms() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          films: data.movies
        });
      });
  }

  handleClick = event => {
    let newCategory = event.currentTarget.querySelector("h2").innerText;
    newCategory = newCategory.replace(/\ /gm, "_");

    this.setState({ category: newCategory });

    audio.play();
    this.setState({
      click: true
    });
  };
  componentDidMount() {
    this.getFilms();
  }
  returnClick = event => {
    this.setState({
      click: false
    });
  };

  render() {
    return (
      <div id="dead">
        <Nav />
        <div className="banner"></div>
        {!this.state.click ? (
          <Categories handleClick={this.handleClick} />
        ) : (
          <div>
            <button id="choice" onClick={this.returnClick}>
              Other choice
            </button>
            <div id="movie_panel">
              <h2>{this.state.category.replace(/\_/gm, " ")}</h2>

              {this.state.films ? (
                this.state.films
                  .filter(
                    film =>
                      this.state.category === "All" ||
                      moviesCategories[this.state.category].includes(film.id)
                  )
                  .map(film => (
                    <Movies {...film} category={this.state.category} />
                  ))
              ) : (
                <h2>Loading</h2>
              )}
            </div>
          </div>
        )}
        {}
      </div>
    );
  }
}
export default Dead;
