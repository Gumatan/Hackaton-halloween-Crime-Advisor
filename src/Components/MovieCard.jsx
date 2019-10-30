import React from "react";

const MovieCard = ({ title, posterUrl, director, year, country }) => (
  <div className="MovieCard">
    <h2>{title}</h2>
    <img src={posterUrl} alt={title} />
    <ul>
      <li>{director}</li>
      <li>{year}</li>
      <li>{country}</li>
    </ul>
  </div>
);

export default MovieCard;
