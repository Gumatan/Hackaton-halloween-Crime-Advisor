import "./reset.css";
import React from "react";
//import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Slogan from "./Components/Slogan";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Slogan />
      </div>
    );
  }
}

export default App;
