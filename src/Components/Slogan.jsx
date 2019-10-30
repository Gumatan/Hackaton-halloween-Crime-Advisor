import React from "react";
//import { Link } from "react-router-dom";
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
    </div>
  );
}
export default Slogan;
