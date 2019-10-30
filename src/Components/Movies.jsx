import React from "react";
import "./Movies.scss";

class Movies extends React.Component {
  render() {
    return (
      <div className="movie_card">
        <img
          src="https://nsa40.casimages.com/img/2019/10/07/1910070355402418.jpg"
          alt="movie poster"
        />
        <div className="movie_infos">
          <h3>Hereditary</h3>
          <p>By Ari Aster</p>
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
