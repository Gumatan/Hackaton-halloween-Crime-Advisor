import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => (
  <Link to="/">
    <nav>
      <img id="logo" src="LogoCrimeAdvisor.png" alt="Crime Advisor logo" />
      <h1>Your choice</h1>
    </nav>
  </Link>
);
export default Nav;
