import "./reset.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Dead from "./Components/Dead";
import "./App.scss";
import Mainpage from "./Components/Mainpage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route path="/dead" component={Dead} />
        </Switch>
      </div>
    );
  }
}

export default App;
