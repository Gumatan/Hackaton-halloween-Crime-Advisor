import React from "react";

const MovieCard = ({ title, posterUrl, director, year, country }) => (
  <div className="MovieCard">
    <h2>{title.replace(/\_/gm, " ")}</h2>
    <img src={posterUrl} alt={title.replace(/\_/gm, " ")} />
    <ul>
      <li>{director.replace(/\_/gm, " ")}</li>
      <li>{year}</li>
      <li>{country.replace(/\_/gm, " ")}</li>
    </ul>
  </div>
);

export default MovieCard;
