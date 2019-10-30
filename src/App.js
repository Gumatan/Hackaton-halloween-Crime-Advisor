import "./reset.css";
import React from "react";
import Nav from "./Components/Nav";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="banner"></div>
      </div>
    );
  }
}

export default App;
