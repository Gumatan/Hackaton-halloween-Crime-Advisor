import React from "react";
import "./Slogan.scss";
import { Link } from "react-router-dom";

function Slogan() {
  return (
    <Link to="/dead">
      <div className="main">
        <img
          className="logo"
          src="./images/LogoCrimeAdvisor.png"
          alt="logo"
        ></img>
        <div className="slogan">La mort n'a pas de prix ></div>
      </div>
    </Link>
  );
}
export default Slogan;
