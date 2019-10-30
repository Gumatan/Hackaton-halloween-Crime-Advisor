import React from "react";
import "./Slogan.scss";

function Slogan() {
  return (
    <body>
      <div className="main">
        <img
          className="logo"
          src="./images/LogoCrimeAdvisor.png"
          alt="logo"
        ></img>
        <div className="slogan">La mort n'a pas de prix</div>
      </div>
    </body>
  );
}
export default Slogan;
