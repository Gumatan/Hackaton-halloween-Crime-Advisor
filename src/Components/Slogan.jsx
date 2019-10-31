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
        <div className="slogan">Death is priceless ></div>
        <div className="text-explicatif">
          <p>Dream of an horror movie ending? </p>
          <p>Our Death experts walk you through.</p>
        </div>
      </div>
    </Link>
  );
}
export default Slogan;
