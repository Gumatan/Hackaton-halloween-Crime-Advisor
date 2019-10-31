import React from "react";
import "./Slogan.scss";
import { Link } from "react-router-dom";

function Slogan() {
  return (
<<<<<<< HEAD
    <Link to="/dead">
      <div className="main">
        <img
          className="logo"
          src="./images/LogoCrimeAdvisor.png"
          alt="logo"
        ></img>
        <div className="slogan">Death is priceless ></div>
        <div className="text-explicatif">
          <p>Dream of an horror movie ending? </p>
          <p>Our Death experts walk you through.</p>
        </div>
=======
    
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
>>>>>>> 68bb58113a9b44bfba60435346af63e0809c4165
      </div>
    </Link>
  );
}
export default Slogan;
