import "./reset.css";
import React from "react";
// import { Switch, Route } from "react-router-dom";
import Dead from "./Components/Dead";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/dead" component={Dead} />
        </Switch> */}
        <Dead />
      </div>
    );
  }
}

export default App;
