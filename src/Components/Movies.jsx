import React from "react";
import "./Movies.scss";

class Movies extends React.Component {
  render() {
    return (
      <div className="movie_card">
        <img src={this.props.posterUrl} alt="movie poster" />
        <div className="movie_infos">
          <h3>{this.props.title.replace(/\_/gm, " ")}</h3>
          <p>By {this.props.director.replace(/\_/gm, " ")}</p>
          <div className="price">
            <p>Price :</p>
            <p>3000€</p>
          </div>
          <button>Book it</button>
        </div>
      </div>
    );
  }
}
export default Movies;
