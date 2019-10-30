import React from "react";
import axios from "axios";
import "./Dead.scss";
import Categories from "./Categories";
import Movies from "./Movies";
import Nav from "./Nav";
import moviesCategories from "../moviesCategories";

class Dead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: true,
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
        this.setState({
          films: data.movies
        });
      });
  }
  handleClick = event => {
    let newCategory = event.target.innerText;
    newCategory = newCategory.replace(/\ /gm, "_");
    console.log(newCategory);

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
    return (
      <div id="dead">
        <Nav />
        <div className="banner"></div>
        {!this.state.click ? (
          <Categories />
        ) : (
          <div id="movie_panel">
            {this.state.films ? (
              this.state.films
                .filter(
                  film =>
                    this.state.category === "noFilter" ||
                    moviesCategories[this.state.category].includes(film.id)
                )
                .map(film => <Movies {...film} />)
            ) : (
              <p>no data yet</p>
            )}
          </div>
        )}
        {}
      </div>
    );
  }
}
export default Dead;
