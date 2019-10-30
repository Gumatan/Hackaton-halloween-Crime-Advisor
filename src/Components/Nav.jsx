import React from "react";
import "./Nav.scss";

const Nav = () => (
  <nav>
    {
      <img
        className="logo"
        src="LogoCrimeAdvisor.png"
        alt="Crime Advisor logo"
      />
    }
    <h1>Your choice</h1>
  </nav>
);
export default Nav;
