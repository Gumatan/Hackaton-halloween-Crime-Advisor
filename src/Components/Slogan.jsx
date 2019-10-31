import React from "react";
import "./Slogan.scss";

function Slogan() {
  return (
    <div className="main">
      <img
        className="logo"
        src="./images/LogoCrimeAdvisor.png"
        alt="logo"
      ></img>
      <div className="slogan">La mort n'a pas de prix ></div>
      <div className="text-explicatif">
        <p>Vous rêvez d'une fin digne d'un film d'horreur? </p>
        <p>Notre équipe de Death experts vous accompagne.</p>
      </div>
    </div>
  );
}
export default Slogan;
