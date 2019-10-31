import React from "react";
//import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Slogan.scss";

function Slogan() {
  return (
    <div className="main">
      {/*<Link to="./Dead">*/}
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
      {/*</Link>*/}
    </div>
  );
}
export default Slogan;
